function check_num(a, b) {
  if (a < 60 && a > 40 && b < 60 && b > 40) {
    return Math.max(a, b);
  }
  return false;
}
