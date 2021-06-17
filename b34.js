const random_Number = (a, b) => {
  return Math.floor(Math.random() * (b - a) + a);
};
console.log(random_Number(2, 10));
console.log(random_Number(1, 5));
console.log(random_Number(-5, -2));
console.log(random_Number(0, 1));
