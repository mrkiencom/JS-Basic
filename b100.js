function check_occurs_at_two_arr(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) !== -1) return true;
  }
  return false;
}
console.log(check_occurs_at_two_arr([1, 2, 3], [3, 4, 5]));
console.log(check_occurs_at_two_arr([1, 2, 3], [5, 6, 7]));
