exports.ShortUrl = function(){};
var util=require('../_utils');

/**
 * 长链转短链
 * @param url_long 需要转换的长链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_shorten = function(url_long,params,callback){
    this.get('short_url/shorten', util.applyHash({url_long:url_long},params),callback);
};

/**
 * 短链转长链
 * @param url_short 需要还原的短链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_expand = function(url_short,params,callback){
    this.get('short_url/expand', util.applyHash({url_short:url_short},params),callback);
};

/**
 * 获取短链接的总点击数
 * @param url_short 需要取得点击数的短链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_clicks = function(url_short,params,callback){
    this.get('short_url/clicks', util.applyHash({url_short:url_short},params),callback);
};

/**
 * 获取一个短链接点击的referer来源和数量
 * @param url_short 需要取得点击来源的短链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_referers = function(url_short,params,callback){
    this.get('short_url/referers', util.applyHash({url_short:url_short},params),callback);
};

/**
 * 获取一个短链接点击的地区来源和数量
 * @param url_short 需要取得点击地区的短链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_locations = function(url_short,params,callback){
    this.get('short_url/locations', util.applyHash({url_short:url_short},params),callback);
};

/**
 * 获取短链接在微博上的微博分享数
 * @param url_short 需要取得分享数的短链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_share_counts = function(url_short,params,callback){
    this.get('short_url/share/counts', util.applyHash({url_short:url_short},params),callback);
};

/**
 * 获取包含指定单个短链接的最新微博内容
 * @param url_short 需要取得关联微博内容的短链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_share_statuses = function(url_short,params,callback){
    this.get('short_url/share/statuses', util.applyHash({url_short:url_short},params),callback);
};

/**
 * 获取短链接在微博上的微博评论数
 * @param url_short 需要取得分享数的短链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_comment_counts = function(url_short,params,callback){
    this.get('short_url/comment/counts', util.applyHash({url_short:url_short},params),callback);
};

/**
 * 获取包含指定单个短链接的最新微博评论
 * @param url_short 需要取得关联微博评论内容的短链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_comment_comments = function(url_short,params,callback){
    this.get('short_url/comment/comments', util.applyHash({url_short:url_short},params),callback);
};

/**
 * 批量获取短链接的富内容信息
 * @param url_short 需要获取富内容信息的短链接
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.ShortUrl.prototype.short_url_info = function(url_short,params,callback){
    this.get('short_url/info', util.applyHash({url_short:url_short},params),callback);
};
