const sumBy = (data, def) => {
  return data
    .map(typeof def === "function" ? def : (data) => data[def])
    .reduce((a, b) => a + b, 0);
};
console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(sumBy([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], "n"));
