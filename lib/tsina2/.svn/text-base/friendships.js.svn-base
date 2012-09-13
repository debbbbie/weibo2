var util = require('../_utils');
exports.Friendships = function(){};

/**
 * 获取用户的关注列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_friends = function(params,callback){
    this.get('friendships/friends', params,callback);
};

/**
 * 获取共同关注人列表
 * @param uid
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_friends_in_common = function(uid,params,callback){
    this.get('friendships/friends/in_common', util.applyHash({uid:uid},params),callback);
};

/**
 * 获取双向关注列表
 * @param uid 需要获取双向关注列表的用户UID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_friends_bilateral = function(uid,params,callback){
    this.get('friendships/friends/bilateral', util.applyHash({uid:uid},params),callback);
};

/**
 * 获取双向关注UID列表
 * @param uid 需要获取双向关注列表的用户UID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_friends_bilateral_ids = function(uid,params,callback){
    this.get('friendships/friends/bilateral/ids', util.applyHash({uid:uid},params),callback);
};

/**
 * 获取用户关注对象UID列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_friends_ids = function(params,callback){
    this.get('friendships/friends/ids', params,callback);
};

/**
 * 获取用户粉丝列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_followers = function(params,callback){
    this.get('friendships/followers', params,callback);
};

/**
 * 获取用户粉丝UID列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_followers_ids = function(params,callback){
    this.get('friendships/followers/ids', params,callback);
};

/**
 * 获取用户优质粉丝列表
 * @param uid
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_followers_active = function(uid,params,callback){
    this.get('friendships/followers/active', util.applyHash({uid:uid},params),callback);
};

/**
 * 获取我的关注人中关注了指定用户的人
 * @param uid 指定的关注目标用户UID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_friends_chain_followers = function(uid,params,callback){
    this.get('friendships/friends_chain/followers', util.applyHash({uid:uid},params),callback);
};

/**
 * 获取两个用户关系的详细情况
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_show = function(params,callback){
    this.get('friendships/show', params,callback);
};

/**
 * 关注某用户
 * @param uid 需要关注的用户ID。
 * @param screen_name 需要关注的用户昵称
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_create = function(uid,screen_name,callback){
    this.get('friendships/create', {uid:uid,screen_name:screen_name},callback);
};

/**
 * 取消关注某用户
 * @param uid 需要关注的用户ID
 * @param screen_name 需要关注的用户昵称
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_destroy = function(uid,screen_name,callback){
    this.get('friendships/destroy', {uid:uid,screen_name:screen_name},callback);
};

/**
 * 更新关注人备注
 * @param uid 需要修改备注信息的用户UID
 * @param remark 备注信息
 * @param callback params:err, result[type json]
 */
exports.Friendships.prototype.friendships_remark_update = function(uid,remark,callback){
    this.get('friendships/remark/update', {uid:uid,remark:remark},callback);
};