"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(r, c) {
        this.radius = r;
        this.color = c && "red";
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
