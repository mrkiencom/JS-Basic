function C(f) {
  return ((f - 32) / 9) * 5;
}
function F(c) {
  return (c / 5) * 9 + 32;
}
const f = 45;
const c = 60;

console.log(`${c} C is ${F(c)} F`);
console.log(`${f} C is ${C(f)} C`);
