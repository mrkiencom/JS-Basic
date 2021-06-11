function rotateLeft(arr) {
  if (arr.length < 3) return false;
  return [arr[1], arr[0], arr[2]];
}
