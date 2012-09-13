exports.Tags = function(){};
var util = require('../_utils');
/**
 * 返回指定用户的标签列表
 * @param uid 要获取的标签列表所属的用户ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Tags.prototype.tags = function(uid,params,callback){
    this.get('tags', util.applyHash({uid:uid},params),callback);
};

/**
 * 批量获取用户标签
 * @param uids 要获取标签的用户ID。最大20，逗号分隔
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Tags.prototype.tags_tags_batch = function(uids,params,callback){
    this.get('tags/tags_batch', util.applyHash({uids:uids},params),callback);
};

/**
 * 返回系统推荐的标签列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Tags.prototype.tags_suggestions = function(params,callback){
    this.get('tags/suggestions', params,callback);
};

/**
 * 添加用户标签
 * @param tags 要创建的一组标签，用半角逗号隔开，每个标签的长度不可超过7个汉字，14个半角字符
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Tags.prototype.tags_create = function(tags,params,callback){
    this.post('tags/create', util.applyHash({tags:tags},params),callback);
};

/**
 * 删除用户标签
 * @param tag_id 要删除的标签ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Tags.prototype.tags_destroy = function(tag_id,params,callback){
    this.post('tags/destroy', util.applyHash({tag_id:tag_id},params),callback);
};

/**
 * 批量删除用户标签
 * @param ids 要删除的一组标签ID，以半角逗号隔开，一次最多提交10个ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Tags.prototype.tags_destroy_batch = function(ids,params,callback){
    this.post('tags/destroy_batch', util.applyHash({ids:ids},params),callback);
};
