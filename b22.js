const filter_Non_Unique = (arr) =>
  arr.filter((values) => arr.indexOf(values) === arr.lastIndexOf(values));
console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));
console.log(filter_Non_Unique([1, 2, 3, 4]));
