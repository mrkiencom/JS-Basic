class Ball {
  constructor(public x: number, public y: number, public z: number) {}
  getX() {
    return this.x;
  }
  setX(x: number) {
    return (this.x = x);
  }
  getY() {
    return this.y;
  }
  setY(y: number) {
    return (this.y = y);
  }
  getZ() {
    return this.z;
  }
  setZ(z: number) {
    return (this.z = z);
  }
  setXYZ(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  toString(): string {
    return `(${this.x},${this.y},${this.z})`;
  }
}
class Player {
  constructor(public x: number, public y: number, public z: number = 0) {}
  move(xDisp: number, yDisp: number) {
    this.x += xDisp;
    this.y += yDisp;
    return this;
  }
  jump(zDisp) {
    return (this.z += zDisp);
  }
  near(ball: Ball) {
    const dis_x = Math.pow(ball.x - this.x, 2);
    const dis_y = Math.pow(ball.y - this.y, 2);
    const dis_z = Math.pow(ball.z - this.z, 2);
    if (Math.sqrt(dis_x + dis_y + dis_z) < 8) return true;
    return false;
  }
}
