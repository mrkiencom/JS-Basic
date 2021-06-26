export class MyPoint {
  constructor(public x: number = 0, public y: number = 0) {}
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  setX(x: number) {
    return (this.x = x);
  }
  setY(y) {
    return (this.y = y);
  }
  getXY() {
    return [this.x, this.y];
  }
  setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }
  toString() {
    return `(${(this.x, this.y)})`;
  }
  distance(obj?: MyPoint, x?: number, y?: number) {
    if (obj) {
      let xDiff = this.x - obj.x;
      let yDiff = this.y - obj.y;
      return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    } else {
      let xDiff = this.x - x;
      let yDiff = this.y - y;
      return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }
  }
}
const p1 = new MyPoint(); // Test constructor
console.log(p1); // Test toString()
p1.setX(8); // Test setters
p1.setY(6);
console.log("x is: " + p1.getX()); // Test getters
console.log("y is: " + p1.getY());
p1.setXY(3, 0); // Test setXY()
console.log(p1.getXY()); // Test getXY()
// console.log(p1.getXY());
console.log(p1);

const p2 = new MyPoint(0, 4); // Test another constructor
console.log(p2);
// Testing the overloaded methods distance()
console.log(p1.distance(p2)); // which version?
console.log(p2.distance(p1)); // which version?
console.log(p1.distance(null, 5, 6)); // which version?
console.log(p1.distance());
