function maximal_D(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1] - arr[0];
}
