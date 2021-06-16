function maximalDifference(arr) {
  let d_max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    d_max = Math.max(d_max, Math.abs(arr[i + 1], arr[i]));
  }
  return d_max;
}
