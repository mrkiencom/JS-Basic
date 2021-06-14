function reverseString(str) {
  return str.split("").reverse().join("");
}
function build_palidrome(str) {
  let check = true;
  let addr = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      for (let j = i; j < str.length; j++) {
        if (str[j] !== str[i * 2 - j + 1]) {
          check = false;
          break;
        } else {
          check = true;
          vt = i;
        }
      }
      if (check === true)
        return str.substring(0, i + 1) + reverseString(str.substring(0, i + 1));
    }
  }
  return str + reverseString(str);
}
console.log(build_palidrome("122"));
