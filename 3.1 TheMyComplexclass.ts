class MyComplex {
  constructor(public real: number = 0, public imag: number = 0) {}
  getReal() {
    return this.real;
  }
  setReal(r: number) {
    return this.real;
  }
  getImag() {
    return this.imag;
  }
  setImag(i: number) {
    return (this.imag = i);
  }
  setValue(real: number, imag: number) {
    (this.real = real), (this.imag = imag);
    return this;
  }
  toString() {
    return `${this.real}+${this.imag}i`;
  }
  isReal(): boolean {
    return this.imag === 0;
  }
  isImaginary(): boolean {
    return this.imag === 0;
  }
  equals(r: number, i: number): boolean {
    return this.real === r && this.imag === i;
  }
  magnitude() {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }
  addInto(right: MyComplex) {
    const real = this.real + right.real;
    const imag = this.imag + right.imag;
    return `${real}+${imag}i`;
  }
  addNew(right: MyComplex) {
    this.real = this.real + right.real;
    this.imag = this.imag + right.imag;
    return this.toString();
  }
}
