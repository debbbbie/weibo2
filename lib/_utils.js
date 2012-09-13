// Returns true if this is a host that closes *before* it ends?!?!
module.exports.isAnEarlyCloseHost= function( hostName ) {
    return hostName && hostName.match(".*google(apis)?.com$")
}
module.exports.applyHash = function(destination, source){
    for(var key in source) destination[key] = source[key];
};
module.exports.applyHashIf = function(destination, source){
    for(var key in source) if(!destination[key]) destination[key] = source[key];
};
String.prototype.insert = function(index,value){
    var str1 = this.substring(0,index);
    var str2 = this.substring(index);
    return str1+value+str2;
};