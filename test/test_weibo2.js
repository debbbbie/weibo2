var OAuth2 = require('weibo2').OAuth2;
var clientId = '3845995382',
    clientSecret = 'f12753195288ff1d6225b4773c080788',
    redirectUri = 'http://127.0.0.1:3009/authorize_callback';
var oauth2 = new OAuth2(clientId, clientSecret,redirectUri);


var app = require('express').createServer();
app.get('/',function(req,res){
    res.redirect(oauth2.getAuthorizeUrl());
});
app.all('/authorize_callback', function(req, res){
    oauth2.getOAuthAccessToken(req.query.code,{},function(err, access_token){
        if( err)  res.send(err.data);
        res.redirect('/update?access_token='+access_token)
    });
});

app.get('/update', function(req, res){
    oauth2.setOAuthAccessToken(req.query.access_token);
    oauth2.update('测试weibo2接口 of nodejs', function(err, result){if(err)res.send(err); res.send(result); })
});



app.listen(3009);