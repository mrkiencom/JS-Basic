var string = "w3resource";
function print() {
  string = string[string.length - 1] + string.substring(0, string.length - 1);
  console.log(string);
  count++;
}
var count = -1;
var set = setInterval(function () {
  print();
  if (count === string.length - 1) clearInterval(set);
}, 100);
function stop() {
  clearInterval(set);
}
