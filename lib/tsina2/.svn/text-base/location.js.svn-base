exports.Location = function(){};

/**
 * 生成一张静态的地图图片
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_base_get_map_image = function(params,callback){
    this.get('location/base/get_map_image', params,callback);
};
/**
 * 根据IP地址返回地理信息坐标
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_geo_ip_to_geo = function(params,callback){
    this.get('location/geo/ip_to_geo', params,callback);
};

/**
 * 根据实际地址返回地理信息坐标
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_geo_address_to_geo = function(params,callback){
    this.get('location/geo/address_to_geo', params,callback);
};

/**
 * 根据地理信息坐标返回实际地址
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_geo_geo_to_address = function(params,callback){
    this.get('location/geo/geo_to_address', params,callback);
};

/**
 * 根据GPS坐标获取偏移后的坐标
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_geo_gps_to_offset = function(params,callback){
    this.get('location/geo/gps_to_offset', params,callback);
};

/**
 * 判断地理信息坐标是否是国内坐标
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_geo_is_domestic = function(params,callback){
    this.get('location/geo/is_domestic', params,callback);
};

/**
 * 批量获取POI点的信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_pois_show_batch = function(params,callback){
    this.get('location/pois/show_batch', params,callback);
};

/**
 * 根据关键词按地址位置获取POI点的信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_pois_search_by_location = function(params,callback){
    this.get('location/pois/search/by_location', params,callback);
};

/**
 * 根据关键词按坐标点范围获取POI点的信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_pois_search_by_geo = function(params,callback){
    this.get('location/pois/search/by_geo', params,callback);
};

/**
 * 根据关键词按矩形区域获取POI点的信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_pois_search_by_area = function(params,callback){
    this.get('location/pois/search/by_area', params,callback);
};

/**
 * 提交一个新增的POI点信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_pois_add = function(params,callback){
    this.post('location/pois/add', params,callback);
};

/**
 * 根据移动基站WIFI等数据获取当前位置信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_mobile_get_location = function(params,callback){
    this.get('location/mobile/get_location', params,callback);
};

/**
 * 根据起点与终点数据查询自驾车路线信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_line_drive_route = function(params,callback){
    this.get('location/line/drive_route', params,callback);
};

/**
 * 根据起点与终点数据查询公交乘坐路线信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_line_bus_route = function(params,callback){
    this.get('location/line/bus_route', params,callback);
};

/**
 * 根据关键词查询公交线路信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_line_bus_line = function(params,callback){
    this.get('location/line/bus_line', params,callback);
};

/**
 * 根据关键词查询公交站点信息
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_line_bus_station = function(params,callback){
    this.get('location/line/bus_station', params,callback);
};

/**
 * 城市代码对应表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_citycode = function(params,callback){
    this.get('location/citycode', params,callback);
};

/**
 * 公交城市代码表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_citycode_bus = function(params,callback){
    this.get('location/citycode_bus', params,callback);
};

/**
 * 分类代码对应表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_category = function(params,callback){
    this.get('location/category', params,callback);
};

/**
 * 地理位置信息接口错误代码及解释
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Location.prototype.location_error2 = function(params,callback){
    this.get('location/error2', params,callback);
};
