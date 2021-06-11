function swap(str) {
  let index = [];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    index[i] = str.charCodeAt(i);
  }
  index.sort((a, b) => a - b);
  for (let i = 0; i <= str.length; i++) {
    result += String.fromCharCode(index[i]);
  }
  console.log(result);
}

swap("asdasdad");
