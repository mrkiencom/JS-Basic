function reverse(arr) {
  let reverse_arr = [];
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse_arr[count++] = arr[i];
  }
  console.log(reverse_arr);
  return reverse_arr;
}
reverse([1, 4, 2, 5, 1, 1, 2, 4, 4, 4]);
