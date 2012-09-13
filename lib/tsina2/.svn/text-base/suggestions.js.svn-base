exports.Suggestions = function(){};
var util = require('../_utils');

/**
 * 获取系统推荐用户
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Suggestions.prototype.suggestions_users_hot = function(params,callback){
    this.get('suggestions/users/hot', params,callback);
};

/**
 * 获取用户可能感兴趣的人
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Suggestions.prototype.suggestions_users_may_interested = function(params,callback){
    this.get('suggestions/users/may_interested', params,callback);
};

/**
 * 根据微博内容推荐用户
 * @param content 微博正文内容
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Suggestions.prototype.suggestions_users_by_status = function(content,params,callback){
    this.get('suggestions/users/by_status', util.applyHash({content:content},params),callback);
};

/**
 * 获取微博精选推荐
 * @param 微博精选分类，1：娱乐、2：搞笑、3：美女、4：视频、5：星座、6：各种萌、7：时尚、8：名车、9：美食、10：音乐。
 * @param is_pic 是否返回图片精选微博，0：全部、1：图片微博
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Suggestions.prototype.suggestions_statuses_hot = function(type,is_pic,params,callback){
    this.get('suggestions/statuses/hot', util.applyHash({type:type,is_pic:is_pic},params),callback);
};

/**
 * 主Feed微博按兴趣推荐排序
 * @param section 排序时间段，距现在n秒内的微博参加排序，最长支持24小时。
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Suggestions.prototype.suggestions_statuses_reorder = function(section,params,callback){
    this.get('suggestions/statuses/reorder', util.applyHash({section:section},params),callback);
};

/**
 * 主Feed微博按兴趣推荐排序的微博ID
 * @param section 排序时间段，距现在n秒内的微博参加排序，最长支持24小时。
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Suggestions.prototype.suggestions_statuses_reorder_ids = function(section,params,callback){
    this.get('suggestions/statuses/reorder/ids',  util.applyHash({section:section},params),callback);
};

/**
 * 热门收藏
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Suggestions.prototype.suggestions_favorites_hot = function(params,callback){
    this.get('suggestions/favorites/hot', params,callback);
};

/**
 * 不感兴趣的人
 * @param uid 不感兴趣的用户的UID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Suggestions.prototype.suggestions_users_not_interested = function(uid,params,callback){
    this.post('suggestions/users/not_interested', util.applyHash({uid:uid},params),callback);
};
