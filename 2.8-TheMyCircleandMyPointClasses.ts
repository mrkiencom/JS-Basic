import { MyPoint } from "./2.6-TheMyPointClass";

class MyCircle {
  constructor(public center: MyPoint, public radius: number = 1) {}
  getRadius() {
    return this.radius;
  }
  getCenter() {
    return this.center;
  }
  setRadius(radius?: number) {
    return (this.radius = radius);
  }
  setCenter(center?: MyPoint) {
    return (this.center = center);
  }
  getCenterX() {
    return this.center.x;
  }
  getCenterY() {
    return this.center.y;
  }
  setCenterX(x: number) {
    return (this.center.x = x);
  }
  setCenterY(y: number) {
    return (this.center.y = y);
  }
  getCenterXY() {
    return [this.center.x, this.center.y];
  }
  setCenterXY(x: number, y: number) {
    this.center.x = x;
    this.center.y = y;
    return this;
  }
  getArea() {
    return 3.14 * this.radius * this.radius;
  }
  getCircomference() {
    return 2 * 3.14 * this.radius;
  }
  distance(another: MyCircle) {
    return this.center.distance(another.center);
  }
}
