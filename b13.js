const byte_Size = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (/^[a-zA-Z0-9]*$/.test(str[i])) count++;
    else count + 2;
  }
  return count;
};
console.log(byte_Size("123456"));
console.log(byte_Size("Hello World"));
console.log(byte_Size("Ã¢"));
