function check_mode(a, b, c) {
  if (a < b && b < c) return "Strict mode";
  return "Soft mode";
}
