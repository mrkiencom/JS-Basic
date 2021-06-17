const random_intArray_In_Range = (a, b, n) => {
  return Array.from({ length: n }, () => Math.floor(Math.random() * (b - a)));
};
console.log(random_intArray_In_Range(1, 20, 10));
console.log(random_intArray_In_Range(-10, 10, 5));
