class time {
  constructor(
    public hour: number,
    public minute: number,
    public second: number
  ) {}
  setHour(h: number) {
    return (this.hour = h);
  }
  setMinute(m: number) {
    return (this.minute = m);
  }
  setSecond(s: number) {
    return (this.second = s);
  }
  getHour() {
    return this.hour;
  }
  getMinute() {
    return this.minute;
  }
  getSecond() {
    return this.second;
  }
  nextSecond() {
    if (this.second === 59) {
      this.second = 0;
      if (this.minute === 59) {
        this.minute = 0;
        if (this.hour === 11) {
          this.hour = 0;
        } else this.hour = this.hour + 1;
      } else this.minute = this.minute + 1;
    } else this.second = this.second + 1;
    return this;
  }
  previousSecond() {
    if (this.second === 0) {
      this.second = 59;
      if (this.minute === 0) {
        this.minute = 59;
        if (this.hour === 0) {
          this.hour = 11;
        } else this.hour = this.hour - 1;
      } else this.minute = this.minute - 1;
    } else this.second = this.second - 1;

    return this;
  }
  setTime(h: number, m: number, s: number) {
    this.hour = h;
    this.minute = m;
    this.second = s;
    return this;
  }
}

const t1 = new time(1, 2, 3);
console.log(t1); // toString()

// Test Setters and Getters
t1.setHour(4);
t1.setMinute(5);
t1.setSecond(6);
console.log(t1); // toString()
console.log("Hour: " + t1.getHour());
console.log("Minute: " + t1.getMinute());
console.log("Second: " + t1.getSecond());

// Test setTime()
t1.setTime(23, 59, 58);
console.log(t1); // toString()

// Test nextSecond();
console.log(t1.nextSecond());
console.log(t1.nextSecond().nextSecond());

// Test previousSecond()
console.log(t1.previousSecond());
console.log(t1.previousSecond().previousSecond());
