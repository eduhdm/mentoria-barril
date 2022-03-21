function getRandomInt(min, max) {
    return (Math.random() % max) + min;
}

// Definir a variavel n e printar:


var n = getRandomInt(19, 20);

console.log ("n é uma varíavel de valor:", n);

// intervalo 1 se n<5
if (n <= 5) {
    console.log ("De Intervalo 1 = Igual ou menor que 5!");
}
// intervalo 2 se n>5 e n<10
if (n > 5 && n <= 10) {
    console.log ("De Intervalo 2 = Maior que 5 e menor que 10!")
}
// intervalo 2 se n>10 e n<20
 else  if (n > 10 && n <= 20) {
    console.log ("De Intervalo 3 = Maior que 10 e menor que 20!")
}
// se o valor de n for igual a 5, printar: igual a 5
// se o valor de n for igual a 10, printar: igual a 10
// se o valor de n for igual a 20, printar: igual a 20


// Pós bagaçeiera
