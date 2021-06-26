import { author } from "./2.1-theAuthorandBookClasses";

class book {
  constructor(
    public name: string,
    public author: author[],
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
}
const authors: author[] = [];
authors[0] = new author("Tan Ah Teck", "AhTeck@somewhere.com", "m");
authors[1] = new author("Paul Tan", "Paul@nowhere.com", "m");

// Declare and allocate a Book instance
const javaDummy = new book("Java for Dummy", authors, 19.99, 99);
console.log(javaDummy);
