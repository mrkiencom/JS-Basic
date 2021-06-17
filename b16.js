const all = (arr, fn = Boolean) => arr.every(fn);
console.log(all([4, 2, 3], (x) => x > 1));
console.log(all([4, 2, 3], (x) => x < 1));
console.log(all([1, 2, 3]));
