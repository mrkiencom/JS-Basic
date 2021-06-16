function appearsMost(arr) {
  let arr_appenrs = [];
  let count = 0;
  let result = [];
  for (let i = 0; i <= Math.max(...arr); i++) {
    arr_appenrs.push(0);
  }
  for (let i = 0; i < arr.length; i++) {
    arr_appenrs[arr[i]]++;
    count = Math.max(...arr_appenrs);
  }
  for (let i = 0; i < arr_appenrs.length; i++) {
    if (arr_appenrs[i] === count) result.push(i);
  }
  console.log(result);
}
appearsMost([1, 2, 3, 2, 2, 8, 1, 9]);
