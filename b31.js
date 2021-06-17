const tail = (arr) => {
  return arr.length === 1 ? arr : arr.slice(1, arr.length);
};
console.log(tail([1, 2, 3]));
console.log(tail([1]));
