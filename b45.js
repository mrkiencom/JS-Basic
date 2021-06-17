const bifurcate = (arr, def) => {
  const index_true = arr.filter((values, key) => def[key] === true);
  const index_false = arr.filter((values, key) => def[key] === false);
  return [index_true, index_false];
};
console.log(
  bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true])
);
