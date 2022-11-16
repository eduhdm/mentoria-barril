// Criar uma funcao que calcula o fatorial de n
// retornar 1 se n for 0

function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

console.log(factorial(5));
console.log(factorial(8));
console.log(factorial(12));
console.log(factorial(14));
console.log(factorial(0));