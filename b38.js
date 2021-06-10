function check(range, exem) {
  if (exem) {
    if (range > 90) return true;
  } else if (range >= 89 && range <= 100) return true;

  return false;
}
