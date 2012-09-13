exports.Account = function(){};


/**
 * 获取隐私设置信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Account.prototype.account_get_privacy	 = function(params,callback){
    this.get('account/get_privacy', params,callback);
};

/**
 * 获取所有学校列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Account.prototype.account_profile_school_list = function(params,callback){
    this.get('account/profile/school_list', params,callback);
};

/**
 * 获取当前用户API访问频率限制
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Account.prototype.account_rate_limit_status	 = function(params,callback){
    this.get('account/rate_limit_status', params,callback);
};

/**
 * OAuth授权之后获取用户UID（作用相当于旧版接口的 account/verify_credentials）
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Account.prototype.account_get_uid	 = function(params,callback){
    this.get('account/get_uid', params,callback);
};

/**
 * 退出登录
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Account.prototype.account_end_session	 = function(params,callback){
    this.get('account/end_session', params,callback);
};