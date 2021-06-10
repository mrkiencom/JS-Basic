function check_year(n) {
  console.log(
    (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0
      ? "leap year"
      : "not leap year"
  );
}
check_year(2100);
