function create(str) {
  if (str.length < 3) return false;
  let new_str = str.slice(str.length - 3, str.length);
  console.log(new_str.repeat(3));
}
create("asdsadsadllass");
