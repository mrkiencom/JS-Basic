export class Circle {
  private radius: number;
  private color: string;
  constructor(r?: number, c?: string) {
    this.radius = r;
    this.color = c && "red";
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
  getRadius() {
    return this.radius;
  }
}
