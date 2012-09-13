exports.Common = function(){};
var util = require('../_utils');

/**
 * 通过地址编码获取地址名称
 * @param codes 需要查询的地址编码，多个之间用逗号分隔
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Common.prototype.common_code_to_location = function(codes,params,callback){
    this.get('common/code_to_location', util.applyHash({codes:codes},params),callback);
};

/**
 * 获取城市列表
 * @param province 省份的省份代码
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Common.prototype.common_get_city = function(province,params,callback){
    this.get('common/get_city', util.applyHash({province:province},params),callback);
};

/**
 * 获取省份列表
 * @param country 国家的国家代
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Common.prototype.common_get_province = function(country,params,callback){
    this.get('common/get_province', util.applyHash({country:country},params),callback);
};

/**
 * 获取国家列表
 * @param capital 国家的首字母
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Common.prototype.common_get_country = function(capital,params,callback){
    this.get('common/get_country', util.applyHash({capital:capital},params),callback);
};

/**
 * 获取时区配置表
 * @param params 自定义参数
 * @param callback params:err, result[type json]
 */
exports.Common.prototype.common_get_timezone = function(params,callback){
    this.get('common/get_timezone', params,callback);
};

