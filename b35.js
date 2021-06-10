function check_string(character, str) {
  if (str.substring(2, 4).indexOf(character) !== -1) return true;
  return false;
}
check_string("as", "asdasdasd");
