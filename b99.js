function check_char(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(b[i]) === -1) return false;
    else a[a.indexOf(b[i])] = "";
  }
  return true;
}
console.log(check_char("xyz", "zyx"));
console.log(check_char("xyz", "zyp"));
