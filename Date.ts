class date {
  constructor(public day: number, public month: number, public year: number) {}
  getDay() {
    return this.day;
  }
  getMonth() {
    return this.month;
  }
  getYear() {
    return this.year;
  }
  setDate(d: number, m: number, y: number) {
    this.day = d;
    this.month = m;
    this.year = y;
    return this;
  }
  setMonth(m: number) {
    return (this.month = m);
  }
  setDay(d: number) {
    return (this.day = d);
  }
  setYear(y: number) {
    return (this.year = y);
  }
}

const d1 = new date(1, 2, 2014);
console.log(d1); // toString()

// Test Setters and Getters
d1.setMonth(12);
d1.setDay(9);
d1.setYear(2099);
console.log(d1); // toString()
console.log("Month: " + d1.getMonth());
console.log("Day: " + d1.getDay());
console.log("Year: " + d1.getYear());

// Test setDate()
d1.setDate(3, 4, 2016);
console.log(d1);
