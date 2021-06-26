import { MyPoint } from "./2.6-TheMyPointClass";

class Myline {
  constructor(public begin: MyPoint, public end: MyPoint) {}
  getBegin() {
    return this.begin;
  }
  getEnd() {
    return this.end;
  }
  setBegin(b: MyPoint) {
    return (this.begin = b);
  }
  setEnd(e: MyPoint) {
    return (this.end = e);
  }
  getBeginX() {
    return this.begin.x;
  }
  setBeginX(x: number) {
    return (this.begin.x = x);
  }
  getBeginY() {
    return this.begin.x;
  }
  setBeginY(y: number) {
    return (this.begin.y = y);
  }

  getEndX() {
    return this.end.x;
  }
  setEndX(x: number) {
    return (this.end.x = x);
  }
  getEndY() {
    return this.end.x;
  }
  setEndY(y: number) {
    return (this.end.y = y);
  }
  getBeginXY() {
    return [this.begin.x, this.begin.y];
  }
  setBeginXY(x: number, y: number) {
    this.begin.x = x;
    this.begin.y = y;
    return this;
  }
  getEndXY() {
    return [this.end.x, this.end.y];
  }
  setEndXY(x: number, y: number) {
    this.end.x = x;
    this.end.y = y;
    return this;
  }
  getLength() {
    let dis_x = this.begin.x - this.end.x;
    let dis_y = this.begin.y - this.end.y;
    return Math.sqrt(dis_x * dis_x - dis_y * dis_y);
  }
  getGradient() {
    let dis_x = this.begin.x - this.end.x;
    let dis_y = this.begin.y - this.end.y;
    return Math.atan2(dis_x, dis_y);
  }
}
