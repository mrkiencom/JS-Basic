function inDays(d1, d2) {
  let days = d2.getTime() - d1.getTime();
  console.log(Math.floor(days / (24 * 60 * 60 * 1000)) + 1);
  return Math.floor(days / (24 * 60 * 60 * 1000) + 1);
}

const chrismas = new Date("25 Dec 2021");
const today = new Date();
inDays(today, chrismas);
