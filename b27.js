const union_With = (a, b, def) => {
  let index = [];
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (def(a[i], b[j])) index[count++] = b[j];
    }
  }
  return a.concat(b.filter((values) => index.includes(values) === false));
};
console.log(
  union_With(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0, 3.9],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
console.log(
  union_With(
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    (a, b) => Math.round(a) === Math.round(b)
  )
);
