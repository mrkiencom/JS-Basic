class MtDate {
  constructor(
    public year: number,
    public month: number,
    public day: number,
    public MONTHS: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    public DAYS: string[] = [
      "Sunday",
      "Monday",
      "Tueday",
      "Wednesday",
      "Thurday",
      "Friday",
      "Saturday",
    ],
    public DAY_IN_MONTHS: number[] = [
      31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
    ]
  ) {}
  isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 == 0
      ? true
      : false;
  }
  isValidDate(year: number, month: number, day: number) {
    if (
      year > 1 &&
      year < 9999 &&
      month >= 1 &&
      month <= 12 &&
      day <= 31 &&
      day >= 1
    ) {
      if (this.isLeapYear(year)) {
        if (day === 29) return true;
        else return false;
      } else return true;
    }
    return false;
  }
  getDayOfWeek(year: number, month: number, day: number) {
    const days = new Date(`${this.MONTHS[month - 1]} ${day}, ${year} `);
    return days.getDay();
  }
  setDate(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
    return this;
  }
  setYear(year: number): string | number {
    if (year < 9999 && year >= 1) {
      return (this.year = year);
    }
    return "Invalid years";
  }
  setMonth(month: number): string | number {
    if (month <= 12 && month >= 1) {
      return (this.month = month);
    }
    return "Invalid month";
  }
  setDay(day: number): string | number {
    if (day === 29) {
      if (this.isLeapYear(this.year) && this.month === 2) {
        return (this.day = day);
      } else return "Invalid day";
    }
    if (day <= 31 && day >= 1) {
      if (day <= this.DAY_IN_MONTHS[this.month - 1]) return (this.day = day);
    }
    return "Invalid day";
  }
  toString() {
    const event = new Date(
      `${this.day} ${this.MONTHS[this.month - 1]} ${this.year}`
    );

    return event.toUTCString();
  }
}
