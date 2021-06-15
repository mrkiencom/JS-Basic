function mirror_bits(n) {
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}

console.log(mirror_bits(56));
console.log(mirror_bits(234));
