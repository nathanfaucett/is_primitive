var isNullOrUndefined = require("@nathanfaucett/is_null_or_undefined");


module.exports = isPrimitive;


function isPrimitive(obj) {
    var typeStr;
    return isNullOrUndefined(obj) || ((typeStr = typeof(obj)) !== "object" && typeStr !== "function") || false;
}
