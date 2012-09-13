var util     = require('./_utils');
var OAuth2   = require("./oauth2").OAuth2;
var Statuses = require('./tsina2/statuses').Statuses;

util.applyHash(OAuth2.prototype, Statuses.prototype);

OAuth2.prototype.setOAuthAccessToken = function(access_token){
    this._accessToken = access_token;
};

exports.OAuth2 = OAuth2;