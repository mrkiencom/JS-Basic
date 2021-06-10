function check(a, b, c) {
  if (a == b && a == c) return 30;
  if (a === b || b === c || a === c) return 40;
  return 20;
}
