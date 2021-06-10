function tolowercase(str) {
  if (str.length < 3) return str.tolowercase();
  return str.substring(0, 3).tolowercase() + str.substring(3, str.length);
}
