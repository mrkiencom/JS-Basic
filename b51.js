function time(n) {
  const h = Math.floor(n / 60);
  const m = n - h * 60;
  console.log(h + ":" + m);
}
time(30);
