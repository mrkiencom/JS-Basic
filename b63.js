function middle(str) {
  if (str.length < 3) return false;
  return str.slice(Math.floor(str.length / 3), Math.floor(str.length / 3) + 3);
}
