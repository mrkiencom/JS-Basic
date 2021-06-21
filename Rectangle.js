"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.Rectangle = function (length, width) {
        if (length || width)
            return "Length:" + length + " Width:" + width;
        return "Length:" + 1 + " Width:" + 1;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
