class MyTime {
  constructor(
    public hour: number = 0,
    public minute: number = 0,
    public second: number = 0
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
  toString() {
    let h: string = "";
    let m: string = "";
    let s: string = "";
    if (this.hour < 10) h = "0" + this.hour;
    else if (this.minute < 10) m = "0" + this.minute;
    else if (this.second < 10) s = "0" + this.second;
    else {
      h = this.hour.toString();
      m = this.minute.toString();
      s = this.second.toString();
    }
    return `${h}:${m}:${s}`;
  }
}
