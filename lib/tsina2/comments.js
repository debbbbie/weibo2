var utils = require('../_utils');
exports.Comments = function(){};

/**
 * 获取某条微博的评论列表
 * @param id 需要查询的微博ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_show = function(id, params, callback){
    this.get('comments/show',utils.applyHash({id:id}, params), callback);
};

/**
 * 我发出的评论列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_by_me = function(params, callback){
    this.get('comments/by_me',params, callback);
};

/**
 * 我收到的评论列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_to_me = function(params, callback){
    this.get('comments/to_me',params, callback);
};

/**
 * 获取用户发送及收到的评论列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_timeline = function(params, callback){
    this.get('comments/timeline',params, callback);
};

/**
 * 获取@到我的评论
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_mentions = function(params, callback){
    this.get('comments/mentions',params, callback);
};

/**
 * 批量获取评论内容
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_show_batch = function(params, callback){
    this.get('comments/show_batch',utils.applyHash({cids:cids},params), callback);
};

/**
 * 评论一条微博
 * @param id 需要评论的微博ID
 * @param comment 评论内容
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_create = function(id,comment,params, callback){
    this.post('comments/create',utils.applyHash({id:id,comment:comment},params), callback);
};

/**
 * 删除一条评论
 * @param cid 要删除的评论ID，只能删除登录用户自己发布的评论
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_destroy = function(cid, callback){
    this.post('comments/destroy',{cid:cid}, callback);
};

/**
 * 批量删除评论
 * @param cids 需要删除的评论ID，用半角逗号隔开，最多20个
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_destroy_batch = function(cids, callback){
    this.get('comments/destroy_batch',{cids:cids}, callback);
};

/**
 * 回复一条评论
 * @param cid 需要回复的评论ID
 * @param id 需要评论的微博ID
 * @param comment 回复评论内容
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Comments.prototype.comments_reply = function(cid,id,comment,params, callback){
    this.get('comments/reply',utils.applyHash({cid:cid,id:id,comment:comment},params), callback);
};
