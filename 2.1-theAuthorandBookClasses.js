"use strict";
exports.__esModule = true;
exports.author = void 0;
var author = /** @class */ (function () {
    function author(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    author.prototype.getName = function () {
        return this.name;
    };
    author.prototype.getEmail = function () {
        return this.email;
    };
    author.prototype.getGender = function () {
        return this.gender;
    };
    author.prototype.setEmail = function (m) {
        return (this.email = m);
    };
    return author;
}());
exports.author = author;
var book = /** @class */ (function () {
    function book(name, author, price, qty) {
        this.name = name;
        this.author = author;
        this.price = price;
        this.qty = qty;
    }
    book.prototype.getName = function () {
        return this.name;
    };
    book.prototype.getPrice = function () {
        return this.price;
    };
    book.prototype.getQty = function () {
        return this.qty;
    };
    book.prototype.getAuthor = function () {
        return this.author;
    };
    book.prototype.setPrice = function (p) {
        return (this.price = p);
    };
    book.prototype.setQty = function (q) {
        return (this.qty = q);
    };
    return book;
}());
var ahTeck = new author("Tan Ah Teck", "ahteck@nowhere.com", "m");
console.log(ahTeck); // Author's toString()
var dummyBook = new book("Java for dummy", ahTeck, 19.95, 99); // Test Book's Constructor
console.log(dummyBook); // Test Book's toString()
// Test Getters and Setters
dummyBook.setPrice(29.95);
dummyBook.setQty(28);
console.log("name is: " + dummyBook.getName());
console.log("price is: " + dummyBook.getPrice());
console.log("qty is: " + dummyBook.getQty());
console.log("Author is: " + dummyBook.getAuthor()); // Author's toString()
console.log("Author's name is: " + dummyBook.getAuthor().getName());
console.log("Author's email is: " + dummyBook.getAuthor().getEmail());
// Use an anonymous instance of Author to construct a Book instance
var anotherBook = new book("more Java", new author("Paul Tan", "paul@somewhere.com", "m"), 29.95);
console.log(anotherBook); // toString()
