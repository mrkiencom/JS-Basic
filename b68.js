function createString(str, n) {
  if (str.length <= n) return false;
  return str.slice(0, n) + str.slice(str.length - n, str.length);
}
