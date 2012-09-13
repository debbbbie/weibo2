exports.Favorites = function(){};

/**
 * 获取用户信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.users_show = function(params,callback){
    this.get('users/show', params,callback);
};

/**
 * 获取当前用户的收藏列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites = function(params,callback){
    this.get('favorites', params,callback);
};
/**
 * 获取当前用户的收藏列表的ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_ids = function(params,callback){
    this.get('favorites/ids', params,callback);
};
/**
 * 获取单条收藏信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_show = function(params,callback){
    this.get('favorites/show', params,callback);
};
/**
 * 获取当前用户某个标签下的收藏列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_by_tags = function(params,callback){
    this.get('favorites/by_tags', params,callback);
};
/**
 * 当前登录用户的收藏标签列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_tags = function(params,callback){
    this.get('favorites/tags', params,callback);
};
/**
 * 获取当前用户某个标签下的收藏列表的ID
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_by_tags_ids = function(params,callback){
    this.get('favorites/by_tags/ids', params,callback);
};
/**
 * 添加收藏
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_create = function(params,callback){
    this.get('favorites/create', params,callback);
};
/**
 * 删除收藏
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_destroy = function(params,callback){
    this.get('favorites/destroy', params,callback);
};
/**
 * 批量删除收藏
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */

exports.Favorites.prototype.favorites_destroy_batch = function(params,callback){
    this.get('favorites/destroy_batch', params,callback);
};
/**
 * 更新收藏标签
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_tags_update = function(params,callback){
    this.get('favorites/tags/update', params,callback);
};

/**
 * 更新当前用户所有收藏下的指定标签
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_tags_update_batch = function(params,callback){
    this.get('favorites/tags/update_batch', params,callback);
};
/**
 * 删除当前用户所有收藏下的指定标签
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Favorites.prototype.favorites_tags_destroy_batch = function(params,callback){
    this.get('favorites/tags/destroy_batch', params,callback);
};
