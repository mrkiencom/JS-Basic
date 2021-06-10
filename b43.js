function check_num(a, b, c) {
  if (a < 0 || b < 0 || c < 0) return false;
  if (a % 10 === b % 10 && c % 10 === b % 10) return true;
  return false;
}
