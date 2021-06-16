function largeOfFirstAndLast(arr) {
  const large_Value = Math.max(arr[0], arr[arr.length - 1]);
  return arr.fill(large_Value);
}
