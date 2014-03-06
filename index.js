var CHARS = '-PYFGCRLAOEUIDHTNSQJKXBMWVZ_pyfgcrlaoeuidhtnsqjkxbmwvz1234567890';
module.exports = function (chars) {
    var uuid = require('uuid');
    var d64 = require('d64')(chars||CHARS);
    return d64.encode(uuid.v4(null,new Array(16),0))
}
module.exports.CHARS = CHARS;
