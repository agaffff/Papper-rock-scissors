sha3_256 = require('js-sha3').sha3_256;

exports.generateGuid= function () {
    var result = '',
        n = 0;
    while (n < 32) {
        result += (~[8, 12, 16, 20].indexOf(n++) ? '-' : '') +
            Math.floor(Math.random() * 16).toString(16).toUpperCase();
    }
    return result;
}

exports.HMAC = function(val){
    let a = sha3_256.update(val).hex();
    return a;
}