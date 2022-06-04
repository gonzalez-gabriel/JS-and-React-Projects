const numbers = [1000, 5000, 200, 900, 100001, 123];

// a) Cantidad de elementos del arreglo
const arrayLength = numbers.length;
console.log('La cantidad elementos del arreglo es:\n', arrayLength);

// b) Porcentaje de número pares e impares
let evenPercentage = 0;
let oddPercentage = 0;
numbers.forEach((number) => {
  number % 2 === 0 ? evenPercentage++ : oddPercentage++;
});
evenPercentage = Number(((evenPercentage * 100) / numbers.length).toFixed(2));
oddPercentage = Number(((oddPercentage * 100) / numbers.length).toFixed(2));
console.log(
  `\nEl porcentaje de números pares del arreglo es:\n${evenPercentage}%`
);
console.log(
  `\nEl porcentaje de números impares del arreglo es:\n${oddPercentage}%`
);

// c) Porcentaje de números mayores a 1000
let greaterThan1000Percentage = 0;
numbers.forEach((number) => {
  number > 1000 ? greaterThan1000Percentage++ : null;
});
greaterThan1000Percentage = Number(
  ((greaterThan1000Percentage * 100) / numbers.length).toFixed(2)
);
console.log(
  `\nEl porcentaje de números mayores a 1000 del arreglo es:\n${greaterThan1000Percentage}%\n`
);

// d) Cuál es el mayor y menor valor
let maxValue = Math.max(...numbers);
let minValue = Math.min(...numbers);
console.log(`El mayor valor del arreglo es:\n${maxValue}\n`);
console.log(`El menor valor del arreglo es:\n${minValue}\n`);

// e) Porcentaje del número mínimo y el porcentaje del promedio de todos los números
const maxNumber = Math.max(...numbers);
let minNumberPercentage = Number(
  ((Math.min(...numbers) * 100) / maxNumber).toFixed(2)
);
let numbersAverage =
  numbers.reduce((prevValue, currValue) => prevValue + currValue, 0) /
  numbers.length;
let allNumbersPercentage = Number(
  ((numbersAverage * 100) / maxNumber).toFixed(2)
);

console.log(
  `El porcentaje del menor número referido al mayor es:\n${minNumberPercentage}\n`
);
console.log(
  `El porcentaje todos los números referido al mayor es:\n${allNumbersPercentage}\n`
);
