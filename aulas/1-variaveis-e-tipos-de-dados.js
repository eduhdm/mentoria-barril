/**
 * Tipos de dados primitivos
 */

// inteiro
var idadeBarril = 26;
var idadeEdu = 23;
console.log("A idade do barril é:", idadeBarril);

// operações + *
var exemplo1 = idadeBarril - idadeEdu;
var exemplo2 = idadeBarril + idadeEdu;
var exemplo3 = idadeBarril * idadeEdu;
var exemplo4 = idadeBarril / idadeEdu;
var exemplo5 = idadeBarril / idadeEdu + 0.43;

console.log("exemplo1", exemplo1);
console.log("exemplo2", exemplo2);
console.log("exemplo3", exemplo3);
console.log("exemplo4", exemplo4);
console.log("exemplo5", exemplo5);

// string
// tem que utilizar aspas duplas " ou aspas simples no começo e no final para delimitar a string
var nomeBarril = "Matheus soca fofo";
var apelido = ", é o tal do barril";

// concatenando string
console.log(nomeBarril + apelido + " djhyasgdjsahvdajsh");

// booleano
var verdadeiro = true;

var falso = false;

// condicionais
console.log("valores de condicionais:");
console.log("true && false:", true && false);
console.log("true || false:", true || false);
console.log("true && true:", true && true);
console.log("false || false:", false || false);

// float
var numeroFloat = 3.14;

/**
 * Tipos de dados nao-primitivos
 */

// ----------------------------------
// objetos
// ----------------------------------
var barril = {
  nome: "Matheus",
  idade: 26,
  sexualidade: "desconhecida",
  altura: 1.91,
};
console.log("--------------- Atributos separados");
// para acessar o valor de um atributo específico utilizamos objeto.atributo
console.log(barril.nome);
console.log(barril.idade);
console.log(barril.sexualidade);
console.log(barril.altura);
// forma alternativa
console.log(barril["altura"]);
console.log("--------------- Printando Objeto");
console.log(barril);

// ----------------------------------
// listas ou arrays
// ----------------------------------
console.log("--------------- Printando lista");
// lista de numeros primos
//            index  0  1  2  3  4
var numerosPrimos = [2, 3, 5, 7, 11];
// printando a lista
console.log(numerosPrimos);
// acessando um atributo
// para acessar um atributo usamos a forma lista[index]
console.log(numerosPrimos[4]);
