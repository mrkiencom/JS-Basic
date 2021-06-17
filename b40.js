const object_to_pairs = (obj) => {
  return Object.keys(obj).map((x) => [x, obj[x]]);
};
console.log(object_to_pairs({ a: 1, b: 2 }));
console.log(object_to_pairs({ a: 1, b: 2, c: 3 }));
