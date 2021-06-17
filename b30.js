const without = (arr, ...args) => {
  return arr.filter((values) => args.includes(values) === false);
};
console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3));
