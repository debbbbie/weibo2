# weibo2: A weibo(like twitter) API SDK with oauth2, use on browser client and nodejs server.


weibo2 API base on weibo API for OAuth2 document: [http://open.weibo.com/](http://open.weibo.com/)

## Requires:
 * server: nodejs

## Nodejs Install

```bash
$ npm install weibo2
```

## How to use


1.run test_weibo2.js
2.open browser with http://localhost:3009
3.input your sinaweibo's account password, and it will send a content to your weibo


### Server

```javascript
// init oauth2
var clientId = 'your appkey',
    clientSecret = 'your app secret',
    redirectUri = 'your callback url';

var oauth2 = new OAuth2(clientId, clientSecret,redirectUri);

// create express server and redirect to sina weibo oauth2 authorize url
var app = require('express').createServer();

app.get('/',function(req,res){

    res.redirect(oauth2.getAuthorizeUrl());
});

// get access_token in your callback url
// and you can test interface update like this:
app.all('/authorize_callback', function(req, res){

    oauth2.getOAuthAccessToken(req.query.code,{},function(err, access_token){
        if( err)  res.send(err.data);

        oauth2.update('测试weibo2接口 of nodejs', function(err, result){
            if(err) res.send(err);
            res.send(result);
        });
    });
});

// or you can init oauth with access_token
app.get('/update_something', function(req, res){

    oauth2.setOAuthAccessToken(req.query.access_token);
    oauth2.update('测试weibo2接口 of nodejs', function(err, result){

        if(err) res.send(err);
        res.send(result);
    });
});

// and you can more function in directory [lib/tsina2](https://github.com/debbbbie/weibo2/tree/master/lib/tsina2)
```




## License

(The MIT License)

Copyright (c) 2012-2013 debbbbie &lt;debbbbie@163.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
