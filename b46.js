function check_mul(a, b) {
  if (a % 7 === 0 || a % 11 === 0 || b % 7 === 0 || b % 11 === 0) return true;
  return false;
}
