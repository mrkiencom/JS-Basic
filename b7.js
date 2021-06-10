for (let i = 2014; i <= 2050; i++) {
  let today = new Date(`January,1, ${i}`);
  let Sunday = today.getDay();

  if (Sunday === 0) {
    console.log("1st January is Sunday at " + i);
  }
}
