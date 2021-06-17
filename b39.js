const omit = (obj, chr) => {
  return Object.keys(obj)
    .filter((key) => !chr.includes(key))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
};
console.log(omit({ a: 1, b: "2", c: 3 }, ["b"]));
console.log(omit({ a: 1, b: 2, c: 3 }, ["c"]));
