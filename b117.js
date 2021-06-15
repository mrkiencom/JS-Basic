function is_identity_Matrix(matrix_data) {
  for (var i = 0; i < matrix_data.length; i++) {
    for (var j = 0; j < matrix_data.length; j++) {
      if (
        (matrix_data[i][j] !== 1 && i === j) ||
        (matrix_data[i][j] && i !== j)
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  is_identity_Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  is_identity_Matrix([
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
