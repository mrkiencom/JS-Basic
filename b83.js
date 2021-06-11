function maxLength_String(arr) {
  let maxLength = 0;
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      result = arr[i];
    }
  }
  return result;
}
