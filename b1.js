const matches = (obj_1, obj_2) =>
  Object.keys(obj_2).every(
    (key) => obj_1.hasOwnProperty(key) && obj_1[key] === obj_2[key]
  );

console.log(
  matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
); // true
console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
console.log(
  matches({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
); // false
