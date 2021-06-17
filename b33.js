const random_Number_In_Range = (a, b) => {
  return Math.random() * (b - a) + a;
};
console.log(random_Number_In_Range(2, 10));
console.log(random_Number_In_Range(1, 5));
console.log(random_Number_In_Range(-5, -2));
console.log(random_Number_In_Range(0, 1));
