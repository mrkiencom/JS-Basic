const object_From_Pairs = (arr) => {
  return arr.reduce((a, b) => ((a[b[0]] = b[1]), a), {});
};
console.log(
  object_From_Pairs([
    ["a", 1],
    ["b", 2],
  ])
);
console.log(
  object_From_Pairs([
    [1, 10],
    [2, 20],
    [3, 30],
  ])
);
