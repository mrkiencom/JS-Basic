const today = new Date();

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const current_day = today.getDay();
const hours = today.getHours();
const minutes = today.getMinutes();
const second = today.getSeconds();

console.log("Today is : ", day[current_day]);
console.log(
  hours > 13 ? hours - 12 + " PM" : hours + " AM" + " :",
  minutes < 10 ? "0" + minutes : minutes,
  ": " + second
);
