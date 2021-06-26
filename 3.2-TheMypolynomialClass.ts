class MyPolynomial {
  constructor(public coeffs: number[]) {}
  getDegree() {
    return this.coeffs.length - 1;
  }
  toString() {
    return this.coeffs.map((num, degree) => `${num}^${degree - 1}+`);
  }
  evaluate(x: number) {
    return this.coeffs.reduce(
      (sum, iteam, key) =>
        sum + iteam * Math.pow(x, this.coeffs.length - key - 1)
    );
  }
}
