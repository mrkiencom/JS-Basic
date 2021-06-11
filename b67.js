function destroy_str(str) {
  if (str.indexOf("P") === 0 || str.indexOf("P") === str.length - 1)
    return str.slice(1, str.length - 1);
  return str;
}
