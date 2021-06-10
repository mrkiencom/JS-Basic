function check_str(str) {
  if (str.indexOf("Script") === 4) return str.substring(5, str.length);
  return str;
}
