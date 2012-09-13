var querystring= require('querystring'),
    crypto= require('crypto'),
    https= require('https'),
    http= require('http'),
    URL= require('url'),
    OAuthUtils= require('./_utils');

exports.OAuth2= function(clientId, clientSecret, authorizePath, accessTokenPath) {
    this._clientId= clientId;
    this._clientSecret= clientSecret;
    this._baseSite= 'https://api.weibo.com';
    this._authorizeUrl= authorizePath || "/oauth2/authorize";
    this._accessTokenUrl= accessTokenPath || "/oauth2/access_token";
    this._accessTokenName= "access_token";
}

// This 'hack' method is required for sites that don't use
// 'access_token' as the name of the access token (for requests).
// ( http://tools.ietf.org/html/draft-ietf-oauth-v2-16#section-7 )
// it isn't clear what the correct value should be atm, so allowing
// for specific (temporary?) override for now.
exports.OAuth2.prototype.setAccessTokenName= function ( name ) {
    this._accessTokenName= name;
}

// https://api.weibo.com/oauth2/access_token?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&grant_type=authorization_code&redirect_uri=YOUR_REGISTERED_REDIRECT_URI&code=CODE
exports.OAuth2.prototype._getAccessTokenUrl= function(code) {
    var params = {
        client_id :this._clientId,
        client_secret:this._clientSecret,
        grant_type:'authorization_code',
        redirect_uri:'http://127.0.0.1:3009/authorize_callback',
        code:code
    }
    return this._baseSite + this._accessTokenUrl + "?" + querystring.stringify(params);
}

exports.OAuth2.prototype._request= function(method, url, headers, post_body, access_token, callback) {

    var http_library= https;
    var creds = crypto.createCredentials({ });
    var parsedUrl= URL.parse( url, true );
    if( parsedUrl.protocol == "https:" && !parsedUrl.port ) {
        parsedUrl.port= 443;
    }

    // As this is OAUth2, we *assume* https unless told explicitly otherwise.
    if( parsedUrl.protocol != "https:" ) {
        http_library= http;
    }

    var realHeaders= {};
    if( headers ) {
        for(var key in headers) {
            realHeaders[key] = headers[key];
        }
    }
    realHeaders['Host']= parsedUrl.host;

    realHeaders['Content-Length']= post_body ? Buffer.byteLength(post_body) : 0;
    if(realHeaders['Content-Length'] > 0) {
        realHeaders['Content-Type'] = "application/x-www-form-urlencoded";
    }
    if( access_token ) {
        if( ! parsedUrl.query ) parsedUrl.query= {};
        parsedUrl.query[this._accessTokenName]= access_token;
    }

    var result= "";
    var queryStr= querystring.stringify(parsedUrl.query);
    if( queryStr ) queryStr=  "?" + queryStr;
    var options = {
        host:parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname + queryStr,
        method: method,
        headers: realHeaders
    };

    // Some hosts *cough* google appear to close the connection early / send no content-length header
    // allow this behaviour.
    var allowEarlyClose= OAuthUtils.isAnEarlyCloseHost(options.host);
    var callbackCalled= false;
    function passBackControl( response, result ) {
        if(!callbackCalled) {
            callbackCalled=true;
            if( response.statusCode != 200 && (response.statusCode != 301) && (response.statusCode != 302) ) {
                callback({ statusCode: response.statusCode, data: result });
            } else {
                callback(null, result, response);
            }
        }
    }

    var request = http_library.request(options, function (response) {
        response.on("data", function (chunk) {
            result+= chunk
        });
        response.on("close", function (err) {
            if( allowEarlyClose ) {
                passBackControl( response, result );
            }
        });
        response.addListener("end", function () {
            passBackControl( response, result );
        });
    });
    request.on('error', function(e) {
        callbackCalled= true;
        callback(e);
    });

    if(  method == 'POST' && post_body ) {
        request.write(post_body);
    }
    request.end();
}


exports.OAuth2.prototype.getAuthorizeUrl= function( params ) {
    var params= params || {};
    params['client_id'] = this._clientId;
    //params['type'] = 'web_server';// sina weibo2 have no this params
    return this._baseSite + this._authorizeUrl + "?" + querystring.stringify(params);
}

exports.OAuth2.prototype.getOAuthAccessToken= function(code, params, callback) {
    var _self = this;
    var params= params || {};
    params['client_id'] = this._clientId;
    params['client_secret'] = this._clientSecret;
    //params['type']= 'web_server'; // sina weibo2 have no this params
    var codeParam = (params.grant_type === 'refresh_token') ? 'refresh_token' : 'code';
    params[codeParam]= code;

    var post_data= querystring.stringify( params );
    var post_headers= {
        'Content-Type': 'application/x-www-form-urlencoded'
    };


    this._request("POST", this._getAccessTokenUrl(code), post_headers, post_data, null, function(error, data, response) {
        if( error )  callback(error);
        else {
            var results;
            try {
                // As of http://tools.ietf.org/html/draft-ietf-oauth-v2-07
                // responses should be in JSON
                results= JSON.parse( data );
            }
            catch(e) {
                // .... However both Facebook + Github currently use rev05 of the spec
                // and neither seem to specify a content-type correctly in their response headers :(
                // clients of these services will suffer a *minor* performance cost of the exception
                // being thrown
                results= querystring.parse( data );
            }
            var access_token= results["access_token"];
            _self._accessToken = access_token;
//            var refresh_token= results["refresh_token"];
//            delete results["refresh_token"];
            callback(null, access_token, results); // callback results =-=
        }
    });
}

// Deprecated
exports.OAuth2.prototype.getProtectedResource= function(url, access_token, callback) {
    this._request("GET", url, {}, "", access_token, callback );
}

exports.OAuth2.prototype.get= function(url, params, callback) {
    if(arguments.length < 3) throw Error('OAuth2.prototype.get must be less than 3 arguments');
    if(url.indexOf('http') < 0) url = this._baseSite + '/2' + (url.indexOf('/')==0 ? '' : '/') + url;
    url = (url.indexOf('?') < 0) ? url + '.json' : url.insert(url.indexOf('?'),'.json');
    url = url + ((url.indexOf('?') < 0) ? '?' : '&') + querystring.parse(params || {});


    this._request("GET", url, {}, "", this._accessToken, function(err, result, response){
        if(typeof result == 'string') result = JSON.parse(result);
        callback(err, result, response);
    } );
};

exports.OAuth2.prototype.post= function(url, post_params, callback) {
    if(arguments.length < 3) throw Error('OAuth2.prototype.get must be less than 3 arguments');

    if(url.indexOf('http') < 0) url = this._baseSite + '/2' + (url.indexOf('/')==0 ? '' : '/') + url;
    url = (url.indexOf('?') < 0) ? url + '.json' : url.insert(url.indexOf('?'),'.json');

    this._request("POST", url, {}, querystring.stringify(post_params), this._accessToken, function(err, result, response){
        if(typeof result == 'string') result = JSON.parse(result);
        if(err && err.data && typeof err.data == 'string') err = JSON.parse(err.data);
        callback(err, result, response);
    } );
};
