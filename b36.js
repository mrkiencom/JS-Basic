const minMax = (...arr) => {
  return [Math.max(...arr), Math.min(...arr)];
};
console.log(minMax(1, 2, 3, 4, 5));
console.log(minMax(1, 2, 5, 4, 3));
console.log(minMax(1, 2, 5, -4, 3));
