function check_num(a, b) {
  if (a == 8 || b == 8 || a + b === 8 || Math.abs(a - b) === 8) return true;
  return false;
}
