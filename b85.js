function caculate(arr) {
  let result = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) result[0] += arr[i];
    else result[1] += arr[i];
  }
}
