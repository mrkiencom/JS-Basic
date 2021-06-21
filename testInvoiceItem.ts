import { InvoiceItem } from "./InvoiceItem";

const inv1 = new InvoiceItem("A101", "Pen Red", 888, 0.08);
console.log(inv1); // toString();

// Test Setters and Getters
inv1.setQty(999);
inv1.setUnitPrice(0.99);
console.log(inv1); // toString();
console.log("id is: " + inv1.getID());
console.log("desc is: " + inv1.getDesc());
console.log("qty is: " + inv1.getQty());
console.log("unitPrice is: " + inv1.getUnitPrice());

// Test getTotal()
console.log("The total is: " + inv1.getTotal());
