const pad = (str, len, chr = "") => {
  return str.padStart(Math.floor(len / str.length) + 1, chr).padEnd(len, chr);
};
console.log(pad("cat", 8));
console.log(pad(String(42), 6, "0"));
console.log(pad("foobar", 3));
