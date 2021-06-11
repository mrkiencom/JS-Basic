function newArray(arr) {
  if (arr.length <= 1) return false;
  return [arr[0], arr[arr.length - 1]];
}
