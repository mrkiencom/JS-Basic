export class author {
  constructor(
    public name?: string,
    public email?: string,
    public gender?: string
  ) {}
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getGender() {
    return this.gender;
  }
  setEmail(m: string) {
    return (this.email = m);
  }
}
class book {
  constructor(
    public name: string,
    public author: author,
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
const ahTeck = new author("Tan Ah Teck", "ahteck@nowhere.com", "m");
console.log(ahTeck); // Author's toString()

const dummyBook = new book("Java for dummy", ahTeck, 19.95, 99); // Test Book's Constructor
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
const anotherBook = new book(
  "more Java",
  new author("Paul Tan", "paul@somewhere.com", "m"),
  29.95
);
console.log(anotherBook); // toString()
