function checkNumber(arr) {
  if (arr.indexOf(3) !== -1) return 3;
  if (arr.indexOf(1) !== -1) return 1;
  if (arr.indexOf(1) !== -1 && arr.indexOf(3) !== -1) return 1 + "and" + 3;
  return false;
}
