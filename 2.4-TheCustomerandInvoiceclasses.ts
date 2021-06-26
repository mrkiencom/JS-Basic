class customer {
  constructor(
    public id: number,
    public name: string,
    public discount: number
  ) {}
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getDiscount() {
    return this.discount;
  }
  setDiscount(d: number) {
    return (this.discount = d);
  }
  toString() {
    return `${this.name}(${this.id})(${this.discount})`;
  }
}

class invoice {
  constructor(
    public id: number,
    public customer: customer,
    public amount: number
  ) {}
  getID() {
    return this.id;
  }
  getCustomer() {
    return this.customer;
  }
  getAmount() {
    return this.amount;
  }
  getCustomerID() {
    return this.customer.id;
  }
  getCustomerName() {
    return this.customer.name;
  }
  getCustomerDiscount() {
    return this.customer.discount;
  }
  getAmountAfterDiscount() {
    return this.amount - (this.amount * this.customer.discount) / 100;
  }
  setAmount(a: number) {
    return (this.amount = a);
  }
}

const c1 = new customer(88, "Tan Ah Teck", 10);
console.log(c1); // Customer's toString()

c1.setDiscount(8);
console.log(c1);
console.log("id is: " + c1.getID());
console.log("name is: " + c1.getName());
console.log("discount is: " + c1.getDiscount());

// Test Invoice class
const inv1 = new invoice(101, c1, 888.8);
console.log(inv1);

inv1.setAmount(999.9);
console.log(inv1);
console.log("id is: " + inv1.getID());
console.log("customer is: " + inv1.getCustomer()); // Customer's toString()
console.log("amount is: " + inv1.getAmount());
console.log("customer's id is: " + inv1.getCustomerID());
console.log("customer's name is: " + inv1.getCustomerName());
console.log("customer's discount is: " + inv1.getCustomerDiscount());
console.log("amount after discount is:", inv1.getAmountAfterDiscount());
