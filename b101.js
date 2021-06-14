function check_str(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (
      !(
        (/[A-Z]/.test(str[i]) && /[a-z]/.test(str[i + 1])) ||
        (/[a-z]/.test(str[i]) && /[A-Z]/.test(str[i + 1]))
      )
    )
      return false;
  }

  return true;
}
console.log(check_str("aBnasdasd"));
