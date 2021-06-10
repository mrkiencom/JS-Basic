function checkMax(a, b, c) {
  const index = [];
  index[0] = a;
  index[1] = b;
  index[2] = c;
  return Math.max(...index);
}
check(1, 2, 4);
