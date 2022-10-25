// Dada uma lista de valores (parametro list), printar valores que sao divisiveis por um outro valor (parametro x) CHECK

function printDivisibleByX(list, x) {
  for (const item of list) {
    if (item % x == 0) {
      console.log(item);
    }
  }
}

console.log(printDivisibleByX([3, 45, 1, 2, 5, 10, 14], 5)); // deve printar 45, 5, 10
console.log(printDivisibleByX([2, 3, 45, 1, 453, 23, 22, 20], 2)); // deve printar 2, 22, 20
