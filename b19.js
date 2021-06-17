const remove_from_right = (arr, n = arr.length - 1) => arr.slice(n);
console.log(remove_from_right([1, 2, 3]));
console.log(remove_from_right([1, 2, 3], -1));
console.log(remove_from_right([1, 2, 3], -2));
console.log(remove_from_right([1, 2, 3], -4));
