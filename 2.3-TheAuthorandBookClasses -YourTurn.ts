import { author } from "./2.1-theAuthorandBookClasses";

class book {
  constructor(
    public isbn: string,
    public name: string,
    public author?: author,
    public price?: number,
    public qty?: number
  ) {}
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getQty() {
    return this.qty;
  }
  getAuthor() {
    return this.author;
  }
  setPrice(p: number) {
    return (this.price = p);
  }
  setQty(q: number) {
    return (this.qty = q);
  }
  getauthorName() {
    return this.author.name;
  }
  getauthor() {
    const obj = Object.keys(this.author).map((key) => [
      `${key} = ${this.author[key]}`,
    ]);
    return [].concat(obj);
  }
}
const a1 = new author("Tan Ah Teck", "ahteck@nowhere.com");
console.log(a1);

a1.setEmail("ahteck@somewhere.com");
console.log(a1);
console.log("name is: " + a1.getName());
console.log("email is: " + a1.getEmail());

// Test Book class
const b1 = new book("12345", "Java for dummies", a1, 8.8, 88);
console.log(b1);

b1.setPrice(9.9);
b1.setQty(99);
console.log(b1);
console.log("isbn is: " + b1.getName());
console.log("name is: " + b1.getName());
console.log("price is: " + b1.getPrice());
console.log("qty is: " + b1.getQty());
console.log("author is: " + b1.getauthor()); // author's toString()
console.log("author's name: " + b1.getauthorName());
console.log("author's name: " + b1.getAuthor().getName());
console.log("author's email: " + b1.getAuthor().getEmail());
