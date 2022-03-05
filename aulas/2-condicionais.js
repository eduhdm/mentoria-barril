console.log("---------------------");
console.log(" IF ---------------------");
console.log("---------------------");

if (10 > 5) {
  console.log("10 é maior q 5");
} else {
  console.log("10 nao é maior q 5");
}
console.log("---------------------");
if (10 >= 50) {
  console.log("10 é maior q 50");
} else {
  console.log("10 nao é maior q 50");
}
console.log("---------------------");
if (10 <= 50) {
  console.log("10 é maior q 50");
} else if (10 > 12) {
  console.log("10 é maior q 8");
} else if (10 > 8) {
  console.log("10 é maior q 8 1");
} else if (10 > 8) {
  console.log("10 é maior q 8 2");
} else {
  console.log("10 nao é maior q 50");
}

console.log("------------- maior");
if (10 > 5) {
  console.log("maior");
}
console.log("------------- maior ou igual");
if (10 >= 4) {
  console.log("maior ou igual");
}
console.log("------------- menor");
if (10 < 10.1) {
  console.log("menor ou igual");
}
console.log("------------- menor ou igual");
if (10 <= 10) {
  console.log("menor ou igual");
}
console.log("------------- igual");
if (10 == 10) {
  console.log("igual");
}
console.log("------------- diferente");
if (10 != 50) {
  console.log("diferente");
}

console.log("---------------------");
console.log(" SWITCH ---------------------");
console.log("---------------------");

var corFavorita = "roxo";
switch (corFavorita) {
  case "amarelo":
    console.log("voce gosta de amarelo");
    break;
  case "azul":
    console.log("voce gosta de azul");
    break;
  case "verde":
    console.log("voce gosta de verde");
    break;
  case "vermelho":
    console.log("voce gosta de vermelho");
    break;
  default:
    console.log("voce nao gosta de nada");
}
