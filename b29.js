function check_num(a, b, c) {
  if ((a <= 99 && a >= 50) || (b <= 99 && b >= 50) || (c <= 99 && c >= 50))
    return true;
  return false;
}
check_num(52, 12, 10);
