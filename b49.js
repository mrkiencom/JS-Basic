function create_str(str) {
  let tmp = "";
  let new_str = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "z") tmp = "z";
    if (str[i] === "Z") tmp = "Z";
    else {
      tmp = String.fromCharCode(str.charCodeAt(i) + 1);
    }
    new_str += tmp;
  }

  console.log(new_str);
}
create_str("PYTHON");
