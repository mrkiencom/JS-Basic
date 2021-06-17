const des = (arr, ...args) => {
  return arr.filter((value) => !args.includes(value));
};
let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(des(arra1, "a", "c"));
let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(des(arra2, "b"));
