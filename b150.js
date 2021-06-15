function swap_ditgits(n) {
  n = n.toString();
  let index = n.split("");
  if (n.length % 2 !== 0) return false;
  for (let i = 0; i < index.length - 1; i = i + 2) {
    let tmp = index[i];
    index[i] = index[i + 1];
    index[i + 1] = tmp;
  }
  index = index.join("");
  return ~~index;
}
console.log(swap_ditgits(15));
console.log(swap_ditgits(1234));
console.log(swap_ditgits(123456));
console.log(swap_ditgits(12345));
