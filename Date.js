var date = /** @class */ (function () {
    function date(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    date.prototype.getDay = function () {
        return this.day;
    };
    date.prototype.getMonth = function () {
        return this.month;
    };
    date.prototype.getYear = function () {
        return this.year;
    };
    date.prototype.setDate = function (d, m, y) {
        this.day = d;
        this.month = m;
        this.year = y;
        return this;
    };
    date.prototype.setMonth = function (m) {
        return (this.month = m);
    };
    date.prototype.setDay = function (d) {
        return (this.day = d);
    };
    date.prototype.setYear = function (y) {
        return (this.year = y);
    };
    return date;
}());
var d1 = new date(1, 2, 2014);
console.log(d1); // toString()
// Test Setters and Getters
d1.setMonth(12);
d1.setDay(9);
d1.setYear(2099);
console.log(d1); // toString()
console.log("Month: " + d1.getMonth());
console.log("Day: " + d1.getDay());
console.log("Year: " + d1.getYear());
// Test setDate()
d1.setDate(3, 4, 2016);
console.log(d1);
