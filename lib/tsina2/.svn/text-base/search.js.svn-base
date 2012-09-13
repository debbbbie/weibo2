exports.Search = function(){};

/**
 * 搜用户搜索建议
 * @param q 搜索的关键字
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Search.prototype.search_suggestions_users = function(q,params,callback){
    this.get('search/suggestions/users', util.applyHash({q:q},params),callback);
};

/**
 * 搜微博搜索建议
 * @param q 搜索的关键字
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Search.prototype.search_suggestions_statuses = function(q,params,callback){
    this.get('search/suggestions/statuses', util.applyHash({q:q},params),callback);
};

/**
 * 搜学校搜索建议
 * @param q 搜索的关键字
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Search.prototype.search_suggestions_schools = function(q,params,callback){
    this.get('search/suggestions/schools', util.applyHash({q:q},params),callback);
};

/**
 * 搜公司搜索建议
 * @param q 搜索的关键字
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Search.prototype.search_suggestions_companies = function(q,params,callback){
    this.get('search/suggestions/companies', util.applyHash({q:q},params),callback);
};

/**
 * 搜应用搜索建议
 * @param q 搜索的关键字
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Search.prototype.search_suggestions_apps = function(q,params,callback){
    this.get('search/suggestions/apps', util.applyHash({q:q},params),callback);
};

/**
 * @联想搜索
 * @param q 搜索的关键字
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Search.prototype.search_suggestions_at_users = function(q,params,callback){
    this.get('search/suggestions/at_users', util.applyHash({q:q},params),callback);
};

/**
 * 搜索某一话题下的微博
 * @param q 搜索的话题关键字
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Search.prototype.search_topics = function(q,params,callback){
    this.get('search/topics', util.applyHash({q:q},params),callback);
};
