function firstAndLast(arr) {
  if (arr.length < 3) return false;
  if (arr[0] === arr[arr.length - 1]) return true;
  return false;
}
