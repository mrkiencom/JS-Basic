function sumOfAbsoluteConsecutive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}
console.log(sumOfAbsoluteConsecutive([1, 2, 3, 2, -5]));
