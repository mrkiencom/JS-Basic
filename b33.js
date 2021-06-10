function check_num(a, b) {
  if (
    (a < 60 && a > 40 && b < 60 && b > 40) ||
    (a < 100 && a > 70 && b < 100 && b > 70)
  )
    return true;
  return false;
}
