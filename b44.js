function check_num(a, b, c) {
  let index = [];
  index[0] = a;
  index[1] = b;
  index[2] = c;
  for (let i = 0; i < 3; i++) {
    if (index[i] >= 20 && Math.max(...index) !== index[i]) return true;
  }
  return false;
}
