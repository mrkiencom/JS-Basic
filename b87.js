function checkSimilarArr(arr_1, arr_2) {
  let count = 0;
  if (arr_1.length < arr_2.length) return false;
  for (let i = 0; i < arr_1.length; i++) {
    if (arr_1[i] !== arr_2[i]) {
      count++;
      for (let j = i; j < arr_2.length; j++) {
        if (arr_1[i] === arr_2[j] && arr_1[j] === arr_2[i]) {
          let tmp = arr_2[i];
          arr_2[i] = arr_2[j];
          arr_2[j] = tmp;
          break;
        }
      }
    }
    console.log(arr_1, arr_2);
    if (count === 2) return false;
  }
  return true;
}
console.log(checkSimilarArr([10, 20, 30], [10, 20, 30]));
console.log(checkSimilarArr([10, 20, 30], [30, 10, 20]));
console.log(checkSimilarArr([10, 20, 30, 40], [10, 30, 20, 40]));
