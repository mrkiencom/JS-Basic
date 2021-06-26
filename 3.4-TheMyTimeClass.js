var MyTime = /** @class */ (function () {
    function MyTime(hour, minute, second) {
        if (hour === void 0) { hour = 0; }
        if (minute === void 0) { minute = 0; }
        if (second === void 0) { second = 0; }
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    MyTime.prototype.setHour = function (h) {
        return (this.hour = h);
    };
    MyTime.prototype.setMinute = function (m) {
        return (this.minute = m);
    };
    MyTime.prototype.setSecond = function (s) {
        return (this.second = s);
    };
    MyTime.prototype.getHour = function () {
        return this.hour;
    };
    MyTime.prototype.getMinute = function () {
        return this.minute;
    };
    MyTime.prototype.getSecond = function () {
        return this.second;
    };
    MyTime.prototype.toString = function () {
        var h = "";
        var m = "";
        var s = "";
        if (this.hour < 10)
            h = "0" + this.hour;
        else if (this.minute < 10)
            m = "0" + this.minute;
        else if (this.second < 10)
            s = "0" + this.second;
        else {
            h = this.hour.toString();
            m = this.minute.toString();
            s = this.second.toString();
        }
        return h + ":" + m + ":" + s;
    };
    return MyTime;
}());
