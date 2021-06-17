const xProd = (arr_1, arr_2) => {
  let index = [];
  let iteam = [];
  let count = 0;
  for (let i = 0; i < arr_1.length; i++) {
    iteam[0] = arr_1[i];
    for (let j = 0; j < arr_2.length; j++) {
      iteam[1] = arr_2[j];
      let tmp = iteam;
      index = index.concat(tmp);
    }
  }
  return index;
};
console.log(xProd([1, 2], ["a", "b"]));
console.log(xProd([1, 2], [1, 2]));
console.log(xProd(["a", "b"], ["a", "b"]));
