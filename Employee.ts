export class Employee {
  constructor(
    public id: number,
    public firtName: string,
    public lastName: string,
    public salary: number
  ) {}
  getID() {
    return this.id;
  }
  getFirstName() {
    return this.firtName;
  }
  getLastName() {
    return this.lastName;
  }
  getSalary() {
    return this.salary;
  }
  getName(): string {
    return this.firtName + this.lastName;
  }
  setSalary(num?: number) {
    if (num) this.salary = num;
  }
  getAnnualSalary() {
    return this.salary * 12;
  }
  raiseSalary(percent: number) {
    return (this.salary = this.salary + (this.salary * percent) / 100);
  }
}
