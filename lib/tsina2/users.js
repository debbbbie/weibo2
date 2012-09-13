exports.Users = function(){};

/**
 * 获取用户信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Users.prototype.users_show = function(params,callback){
    this.get('users/show', params,callback);
};

/**
 * 通过个性域名获取用户信息
 * @param domain 需要查询的个性化域名
 * @param callback params:err, result[type json]
 */
exports.Users.prototype.users_domain_show = function(domain,callback){
    this.get('users/domain_show', {domain:domain},callback);
};

/**
 *批量获取用户的粉丝数、关注数、微博数
 * @param uids 需要获取数据的用户UID，多个之间用逗号分隔，最多不超过100个
 * @param callback params:err, result[type json]
 */
exports.Users.prototype.users_counts = function(uids,callback){
    this.get('users/counts',{uids:uids}, callback);
};