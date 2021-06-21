"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, firtName, lastName, salary) {
        this.id = id;
        this.firtName = firtName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Employee.prototype.getID = function () {
        return this.id;
    };
    Employee.prototype.getFirstName = function () {
        return this.firtName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.getName = function () {
        return this.firtName + this.lastName;
    };
    Employee.prototype.setSalary = function (num) {
        if (num)
            this.salary = num;
    };
    Employee.prototype.getAnnualSalary = function () {
        return this.salary * 12;
    };
    Employee.prototype.raiseSalary = function (percent) {
        return (this.salary = this.salary + (this.salary * percent) / 100);
    };
    return Employee;
}());
exports.Employee = Employee;
