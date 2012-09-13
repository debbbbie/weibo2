exports.Trends = function(){};

/**
 * 获取某人话题
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Trends.prototype.trends	 = function(params,callback){
    this.get('trends', params,callback);
};

/**
 * 是否关注某话题
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Trends.prototype.trends_is_follow = function(params,callback){
    this.get('trends/is_follow', params,callback);
};

/**
 * 返回最近一小时内的热门话题
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Trends.prototype.trends_hourly = function(params,callback){
    this.get('trends/hourly', params,callback);
};

/**
 * 返回最近一天内的热门话题
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Trends.prototype.trends_daily = function(params,callback){
    this.get('trends/daily', params,callback);
};

/**
 * 返回最近一周内的热门话题
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Trends.prototype.trends_weekly = function(params,callback){
    this.get('trends/weekly', params,callback);
};

/**
 * 关注某话题
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Trends.prototype.trends_follow = function(params,callback){
    this.get('trends/follow', params,callback);
};

/**
 * 取消关注的某一个话题
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Trends.prototype.trends_destroy = function(params,callback){
    this.get('trends/destroy', params,callback);
};