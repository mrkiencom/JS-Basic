"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var e1 = new Employee_1.Employee(8, "Peter", "Tan", 2500);
console.log(e1); // toString();
// Test Setters and Getters
e1.setSalary(999);
console.log(e1); // toString();
console.log("id is: " + e1.getID());
console.log("firstname is: " + e1.getFirstName());
console.log("lastname is: " + e1.getLastName());
console.log("salary is: " + e1.getSalary());
console.log("name is: " + e1.getName());
console.log("annual salary is: " + e1.getAnnualSalary()); // Test method
// Test raiseSalary()
console.log(e1.raiseSalary(10));
console.log(e1);
