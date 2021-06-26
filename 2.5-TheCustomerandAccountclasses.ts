class Customer {
  constructor(public id: number, public name: string, public gender: string) {}
  getID() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getGender() {
    return this.gender;
  }
  toString() {
    return `${this.name}(${this.id})`;
  }
}
class Account {
  constructor(
    public id: number,
    public customer: Customer,
    public balance?: number
  ) {}
  getID() {
    return this.id;
  }
  getCustomer() {
    return this.customer;
  }
  getBalance() {
    return this.balance;
  }
  setBalance(b: number) {
    return (this.balance = b);
  }
  toString() {
    return this.customer.toString() + `balance=$${this.balance}`;
  }
  getCustomerName() {
    return this.customer.name;
  }
  deposit(amount: number) {
    return (this.balance = this.balance + amount);
  }
  withdraw(amount: number): void | number | string {
    if (this.balance >= amount) return (this.balance = this.balance - amount);
    else return "amount withdrawn exceeds the current balance!";
  }
}
