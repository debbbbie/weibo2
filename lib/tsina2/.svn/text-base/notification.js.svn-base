exports.Notification = function(){};
var util = require('../_utils');

/**
 * 给一个或多个用户发送一条新的状态通知
 * @param uids 接收通知的用户UID，支持1-100个用户，用逗号分隔
 * @param tpl_id 发送通知所对应的模版ID，必须是通过审核，且启用中的模版
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Notification.prototype.notification_send = function(uids,tpl_id,params,callback){
    this.post('notification/send', util.applyHash({uids:uids,tpl_id:tpl_id},params),callback);
};


