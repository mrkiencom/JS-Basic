function calculateSum(arr) {
  if (arr.length < 3) return false;
  return arr.reduce((a, b) => a + b, 0);
}
