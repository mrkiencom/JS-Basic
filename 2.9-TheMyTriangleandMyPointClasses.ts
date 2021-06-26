import { MyPoint } from "./2.6-TheMyPointClass";

class MyTriangle {
  constructor(public v1: MyPoint, public v2: MyPoint, public v3: MyPoint) {}
  getPerimeter() {
    return this.v1.distance() + this.v2.distance() + this.v3.distance();
  }
  getType(): string {
    const x1 = this.v1.distance();
    const x2 = this.v2.distance();
    const x3 = this.v3.distance();
    if (x1 == x2 && x2 == x3) return "equilateral";
    if (x1 == x2 || x1 == x3 || x2 == x3) return "isosceles";
    return "scalene";
  }
}
