function isCity(str) {
  if (str.slice(0, 3) === "New" || str.slice(0, 3) === "Low") return true;
  return false;
}
