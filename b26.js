function create_str(str) {
  if (str < 3) return;
  return (
    str.substring(str.length - 3, str.length) +
    str +
    str.substring(str.length - 3, str.length)
  );
}
