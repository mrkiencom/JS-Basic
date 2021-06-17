const upTocase = (str, upperCase = false) => {
  return upperCase === false
    ? str.slice(0, 1).toLowerCase() + str.slice(1, str.length)
    : str.slice(0, 1).toLowerCase() + str.slice(1, str.length).toUpperCase();
};
console.log(upTocase("W3resource"));
console.log(upTocase("Red", true));
