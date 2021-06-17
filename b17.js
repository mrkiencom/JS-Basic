const bifurcate = (arr, bool) => {
  return [arr.filter((values, keys) => bool[keys] === true)].concat([
    arr.filter((values, keys) => bool[keys] === false),
  ]);
};

console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));
