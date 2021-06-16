function change_case(str) {
  let a = (b = 0);
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) a++;
    else b++;
  }
  return a > b ? str.toUpperCase() : str.toLowerCase();
}
console.log(change_case("PHp"));
