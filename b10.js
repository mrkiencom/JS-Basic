function pull_at_Index(index, pull_index) {
  return index.filter((values, key) => pull_index.includes(key));
}
let arra1 = ["a", "b", "c", "d", "e", "f"];
console.log(pull_at_Index(arra1, [1, 3]));
let arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4]));
