let number1 = -35;
let number2 = 10;

const multiplyWithoutOperator = (x, y) => {
  let multiplication = 0;
  for (let i = Math.abs(x); i > 0; i--) {
    multiplication += Math.abs(y);
  }
  if ((x <= 0 && y <= 0) || (x >= 0 && y >= 0)) {
    return multiplication;
  } else {
    return -multiplication;
  }
};

console.log(multiplyWithoutOperator(number1, number2));
