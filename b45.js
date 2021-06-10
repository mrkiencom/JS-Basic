function check_num(a, b) {
  if (a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15)
    return true;
  return false;
}
