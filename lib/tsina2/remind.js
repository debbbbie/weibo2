exports.Remind = function(){};
var util = require('../_utils');

/**
 * 获取某个用户的各种消息未读数
 * @param uid 需要获取消息未读数的用户UID，必须是当前登录用户
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Remind.prototype.remind_unread_count = function(uid,params,callback){
    this.get('remind/unread_count', util.applyHash({uid:uid},params),callback);
};

/**
 * 对当前登录用户某一种消息未读数进行清零
 * @param type 需要清零未读数的消息项，status：新微博数、follower：新粉丝数、cmt：新评论数、dm：新私信数、
 *             mention_status：新提及我的微博数、mention_cmt：新提及我的评论数，一次只能操作一项。
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Remind.prototype.remind_set_count = function(type,params,callback){
    this.post('remind/set_count', util.applyHash({type:type},params),callback);
};

