import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

const c1 = new Circle(2.0);
const c2 = new Circle(6.6);
const c3 = new Circle(1.1);
const r1 = new Rectangle(1.2, 3.4);

console.log(c1.getArea());
console.log(c2.getArea());
console.log(c3);

console.log(r1);
console.log(r1.Rectangle());
console.log(r1.Rectangle(2, 4));
