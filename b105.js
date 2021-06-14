function sum_single_digit_number(n) {
  let sum = 0;
  while (1) {
    sum += n % 10;
    n = Math.floor(n / 10);
    if (n === 0) {
      if (sum < 10) return sum;
      else {
        n = sum;
        sum = 0;
      }
    }
  }
}
console.log(sum_single_digit_number(156));
