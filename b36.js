function check_num(a, b, c) {
  a.toString();
  b.toString();
  c.toString();
  if (
    a[a.length - 1] === b[b.length - 1] &&
    b[b.length - 1] === c[c.length - 1]
  )
    return true;
  return false;
}
check_num(123, 13, 1233);
