"use strict";
exports.__esModule = true;
exports.InvoiceItem = void 0;
var InvoiceItem = /** @class */ (function () {
    function InvoiceItem(id, desc, qty, unitPrice) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }
    InvoiceItem.prototype.getID = function () {
        return this.id;
    };
    InvoiceItem.prototype.getDesc = function () {
        return this.desc;
    };
    InvoiceItem.prototype.getQty = function () {
        return this.qty;
    };
    InvoiceItem.prototype.getUnitPrice = function () {
        return this.unitPrice;
    };
    InvoiceItem.prototype.setQty = function (num) {
        return (this.qty = num);
    };
    InvoiceItem.prototype.setUnitPrice = function (price) {
        return (this.unitPrice = price);
    };
    InvoiceItem.prototype.getTotal = function () {
        return this.unitPrice * this.qty;
    };
    return InvoiceItem;
}());
exports.InvoiceItem = InvoiceItem;
