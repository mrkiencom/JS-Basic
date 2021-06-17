const check_y_n = (str, bool) => {
  return ["Y", "yes"].includes(str)
    ? true
    : ["n", "No"].includes(str)
    ? false
    : bool;
};
console.log(check_y_n("Y"));
console.log(check_y_n("yes"));
console.log(check_y_n("No"));
console.log(check_y_n("Foo", true));
