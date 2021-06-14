function deleteNumber(number) {
  number = number.toString();

  let index = number.split("");
  const min = Math.min(...index);
  for (let i = 0; i < index.length; i++) {
    if (index[i] == min) {
      index[i] = "";
      break;
    }
  }
  return index.join("");
}
console.log(deleteNumber(100));
console.log(deleteNumber(10));
console.log(deleteNumber(1245));
