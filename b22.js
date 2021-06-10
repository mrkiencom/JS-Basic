function del_str(i, str) {
  console.log(str.substring(0, i) + str.substring(i + 1, str.length));
  return str.substring(0, i) + str.substring(i + 1, str.length);
}
del_str(4, "asdadwasd");
