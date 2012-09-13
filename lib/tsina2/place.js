exports.Place = function(){};


/**
 * 获取公共的位置动态
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_public_timeline = function(params,callback){
    this.get('place/public_timeline', params,callback);
};

/**
 * 获取用户好友的位置动态
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_friends_timeline = function(params,callback){
    this.get('place/friends_timeline', params,callback);
};

/**
 * 获取某个用户的位置动态
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_user_timeline = function(params,callback){
    this.get('place/user_timeline', params,callback);
};

/**
 * 获取某个位置地点的动态
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_poi_timeline = function(params,callback){
    this.get('place/poi_timeline', params,callback);
};

/**
 * 获取某个位置周边的动态
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_nearby_timeline = function(params,callback){
    this.get('place/nearby_timeline', params,callback);
};

/**
 * 获取动态的详情
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_statuses_show = function(params,callback){
    this.get('place/statuses/show', params,callback);
};

/**
 * 获取LBS位置服务内的用户信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_users_show = function(params,callback){
    this.get('place/users/show', params,callback);
};

/**
 * 获取用户签到过的地点列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_users_checkins = function(params,callback){
    this.get('place/users/checkins', params,callback);
};

/**
 * 获取用户的照片列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_users_photos = function(params,callback){
    this.get('place/users/photos', params,callback);
};

/**
 * 获取用户的点评列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_users_tips = function(params,callback){
    this.get('place/users/tips', params,callback);
};

/**
 * 获取用户的todo列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_users_todos = function(params,callback){
    this.get('place/users/todos', params,callback);
};

/**
 * 获取地点详情
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_show = function(params,callback){
    this.get('place/pois/show', params,callback);
};

/**
 * 获取在某个地点签到的人的列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_users = function(params,callback){
    this.get('place/pois/users', params,callback);
};

/**
 * 获取地点点评列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_tips = function(params,callback){
    this.get('place/pois/tips', params,callback);
};

/**
 * 获取地点照片列表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_photos = function(params,callback){
    this.get('place/pois/photos', params,callback);
};

/**
 * 按省市查询地点
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_search = function(params,callback){
    this.get('place/pois/search', params,callback);
};

/**
 * 获取地点分类
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_category = function(params,callback){
    this.get('place/pois/category', params,callback);
};

/**
 * 获取附近地点
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_nearby_pois = function(params,callback){
    this.get('place/nearby/pois', params,callback);
};

/**
 * 获取附近发位置微博的人
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_nearby_users = function(params,callback){
    this.get('place/nearby/users', params,callback);
};

/**
 * 获取附近照片
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_nearby_photos = function(params,callback){
    this.get('place/nearby/photos', params,callback);
};

/**
 * 获取附近的人
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_nearby_users_list = function(params,callback){
    this.get('place/nearby_users/list', params,callback);
};

/**
 * 添加地点
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_create = function(params,callback){
    this.post('place/pois/create', params,callback);
};

/**
 * 签到
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_add_checkin = function(params,callback){
    this.post('place/pois/add_checkin', params,callback);
};

/**
 * 添加照片
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_add_photo = function(params,callback){
    this.post('place/pois/add_photo', params,callback);
};

/**
 * 添加点评
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_add_tip = function(params,callback){
    this.post('place/pois/add_tip', params,callback);
};

/**
 * 添加todo
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_pois_add_todo = function(params,callback){
    this.post('place/pois/add_todo', params,callback);
};

/**
 * 用户添加自己的位置
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_nearby_users_create = function(params,callback){
    this.post('place/nearby_users/create', params,callback);
};

/**
 * 用户删除自己的位置
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Place.prototype.place_nearby_users_destroy = function(params,callback){
    this.post('place/nearby_users/destroy', params,callback);
};
