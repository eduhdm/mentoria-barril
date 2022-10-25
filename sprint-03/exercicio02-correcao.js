// Dado uma lista de valores (parametro list), printar valores que sao maiores que um valor (parametro value) CHECK

// Implemente essa funcao
function printGreaterThanX(list, x) {
  for (const item of list) {
    if (item > x) {
      console.log(item);
    }
  }
}

console.log("lista 1");
printGreaterThanX([2, 3, 4, 423, 54, 312, 312, 31245], 5000); // deve printar 31245

console.log("lista 2");
printGreaterThanX([-100, 200, 32, 100], -20); // deve printar 200, 32, 100
