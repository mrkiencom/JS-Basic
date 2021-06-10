function swap(str) {
  if (str.length < 1) return "errror.....";
  let str_0 = str[0];
  let str_1 = str[str.length - 1];

  console.log(str_1 + str.substring(1, str.length - 1) + str_0);
}
swap("asdfsdfdsfsfb");
