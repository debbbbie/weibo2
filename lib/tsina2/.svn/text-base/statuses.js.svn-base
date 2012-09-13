exports.Statuses = function(){};
/**
 * 获取最新的公共微博
 * @param params 自定义参数
 * @param callback function(err, result){};
 */
exports.Statuses.prototype.public_timeline = function(params,callback){
    this.get('statuses/public_timeline', callback);
};
/**
 * 获取当前登录用户及其所关注用户的最新微博
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.friends_timeline = function(params,callback){
    this.get('statuses/friends_timeline',params,callback);
};


/**
 * 获取当前登录用户及其所关注用户的最新微博
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.home_timeline = function(params,callback){
    this.get('statuses/home_timeline', callback);
};

/**
 * 获取当前登录用户及其所关注用户的最新微博的ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.friends_timeline_ids = function(params, callback){
    this.get('statuses/friends_timeline/ids',callback);
};

/**
 * 获取用户发布的微博
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.user_timeline = function(params, callback){
    this.get('statuses/user_timeline',params,callback);
};
/**
 * 获取用户发布的微博的ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.user_timeline_ids = function(params, callback){
    this.get('statuses/user_timeline/ids',params, callback);
};

/**
 * 返回一条原创微博的最新转发微博
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.repost_timeline = function(params, callback){
    this.get('statuses/repost_timeline',params, callback);
};

/**
 * 获取一条原创微博的最新转发微博的ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.repost_timeline_ids = function(params, callback){
    this.get('statuses/repost_timeline/ids',params, callback);
};

/**
 * 返回用户转发的最新微博
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.repost_by_me = function(params, callback){
    this.get('statuses/repost_by_me',params, callback);
};

/**
 * 获取@当前用户的最新微博
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.mentions = function(params, callback){
    this.get('statuses/mentions',params, callback);
};

/**
 * 获取@当前用户的最新微博的ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.mentions_ids = function(params, callback){
    this.get('statuses/mentions/ids',params, callback);
};

/**
 * 获取双向关注用户的最新微博
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.bilateral_timeline = function(params, callback){
    this.get('statuses/bilateral_timeline',callback);
};

/**
 * 根据ID获取单条微博信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.show = function(params, callback){
    this.get('statuses/show',params, callback);
};

/**
 * 通过id获取mid
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.querymid = function(params, callback){
    this.get('statuses/querymid',params, callback);
};

/**
 * 通过mid获取id
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.queryid = function(params, callback){
    this.get('statuses/queryid',params, callback);
};

/**
 * 按天返回热门转发榜 （已废弃）
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.hot_repost_daily = function(params, callback){
    this.get('statuses/hot/repost_daily',params, callback);
};

/**
 * 按周返回热门转发榜 （已废弃）
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.hot_repost_weekly = function(params, callback){
    this.get('statuses/hot/repost_weekly',params, callback);
};

/**
 * 按天返回当前用户关注人的热门微博评论榜（已废弃）
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.hot_comments_daily = function(params, callback){
    this.get('statuses/hot/comments_daily',params, callback);
};

/**
 * 按周返回热门评论榜 （已废弃）
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.hot_comments_weekly = function(params, callback){
    this.get('statuses/hot/comments_weekly',params, callback);
};

/**
 * 批量获取指定微博的转发数评论数
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.count = function(params, callback){
    this.get('statuses/count',params, callback);
};
/**
 * 转发一条微博信息
 * @param id 要转发的微博ID。
 * @param content 添加的转发文本，可为空
 * @param is_comment 是否在转发的同时发表评论，0：否、1：评论给当前微博、2：评论给原微博、3：都评论，默认为0 。
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.repost = function(id, content, is_comment, callback){
    this.post('statuses/repost',{
        id:id,
        status:content,
        is_comment:is_comment
    },callback);
};
/**
 * 删除微博信息
 * @param id 需要删除的微博ID。
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.destroy = function(id, callback){
    this.post('statuses/destroy',{id:id},callback);
};
/**
 * 发布一条微博信息
 * @param content 要发布的微博文本内容
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.update = function(content, callback){
    this.post('statuses/update', {status: content}, callback);
};

/**
 * 上传图片并发布一条微博
 * TODO 还没有实现上传图片的功能，可以暂时用upload_url_text代替
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.upload = function(callback){
};
/**
 * 发布一条微博同时指定上传的图片或图片url
 * @param content 要发布的微博文本内容
 * @param img_url 图片的URL地址，必须以http开头
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.upload_url_text = function(content, img_url, callback){
    this.post('statuses/upload_url_text',{status:content,url:img_url},callback);
};

/**
 * 获取官方表情
 * @param callback params:err, result[type json]
 */
exports.Statuses.prototype.emotions = function(callback){
    this.get('emotions',callback);
};