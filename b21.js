const pop_num = (arr, num) => {
  return arr.filter((value, key) => (key + 1) % num === 0);
};
console.log(pop_num([1, 2, 3, 4, 5, 6], 1));
console.log(pop_num([1, 2, 3, 4, 5, 6], 2));
console.log(pop_num([1, 2, 3, 4, 5, 6], 3));
console.log(pop_num([1, 2, 3, 4, 5, 6], 4));
