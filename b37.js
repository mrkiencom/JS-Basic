const orderBy = (data, props, dow) => {
  data.sort((a, b) => a.props[0].localeCompare(b.props[0]));
  return data.sort((a, b) => {
    if (a.name === b.name) return a.age - b.age;
  });
};

const users = [
  { name: "fred", age: 48 },
  { name: "barney", age: 36 },
  { name: "fred", age: 40 },
];
console.log(orderBy(users, ["name", "age"]));
