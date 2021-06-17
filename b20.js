const extend = (str) => {
  let index = str.split("");
  index = index.map((chars) => chars + chars);
  return index.indexOf("#") === -1 ? "#" + index.join("") : index.join("");
};
console.log(extend("abc"));
