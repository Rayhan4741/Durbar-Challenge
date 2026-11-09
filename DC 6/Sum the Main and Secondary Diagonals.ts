interface DiagonalSumsResult {
  main: number;
  secondary: number;
}

function diagonalSums(matrix: number[][]): DiagonalSumsResult {
  const n = matrix.length;
  let mainSum = 0;
  let secondarySum = 0;

  for (let i = 0; i < n; i++) {
    mainSum += matrix[i][i];
    secondarySum += matrix[i][n - 1 - i];
  }

  return {
    main: mainSum,
    secondary: secondarySum,
  };
}
