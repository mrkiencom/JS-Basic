function find_values(arr, n) {
  let max_distance = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) {
      let dis = Math.abs(arr[i] - arr[j]);
      if (dis <= n) {
        max_distance = Math.max(max_distance, dis);
      }
    }
  return max_distance;
}
console.log(find_values([12, 10, 33, 34], 10));
console.log(find_values([12, 10, 33, 34], 24));
console.log(find_values([12, 10, 33, 44], 40));
