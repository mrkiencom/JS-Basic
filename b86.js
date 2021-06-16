function givenAngle(n) {
  const types = n < 90 && n > 0 ? 1 : n === 90 ? 2 : n > 90 && n < 180 ? 3 : 4;
  switch (types) {
    case 1:
      console.log("Acute angle");
      break;
    case 2:
      console.log("Right angle");
      break;
    case 3:
      console.log("Obtuse angle");
      break;
    case 4:
      console.log("Straight angle");
      break;
    default:
      break;
  }
}
givenAngle(30);
