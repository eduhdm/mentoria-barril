//Variavel interagindo com variavel de forma variante! Importante fazer cálculo na direita do sinal de =
var contagem = 6
var bonusContagem = 50
console.log(bonusContagem) 

bonusContagem = bonusContagem + 100
console.log(bonusContagem)

bonusContagem = bonusContagem - 115
console.log(bonusContagem)

bonusContagem = bonusContagem + 35
console.log(bonusContagem)

contagem *= bonusContagem
console.log(contagem + " Coicidência?! Acho que não!!")

// Indentidade estudantil
const eu = {
    nome: "Barril",
    sobrenome: "Barrilete",
    idade: 27, 
    altur: 1.9,
    cpf: "7 bala nu tambo",
    };
    
    console.log("Esse é o " + eu.nome + "  " + eu.sobrenome + " ele possui " + eu.idade + " anos de idade. Ele tem " + eu.cpf + " e sua altura é " + eu.altur + " m pra cima!");

//Calculadora idade de cachorro!
var idadeCão = 7;

idadeCãoDeCaça = eu.idade * idadeCão;

console.log (eu.nome + "  " + eu.sobrenome + " possui: " + idadeCãoDeCaça + " anos Caninos!");

if (idadeCãoDeCaça > 100){
console.log (eu.nome + " é um cachorro velho!")}

//Joguinho de corrida

const vermelho = {
    lap1: 33,
    lap2: 27,
    lap3: 31,
};
const verde  = {
    lap1: 34,
    lap2: 23,
    lap3: 41,
};
const amarelo = {
    lap1: 15,
    lap2: 15,
    lap3: 15,
};

function soma() {
    var tempo = vermelho.lap1 + vermelho.lap2 + vermelho.lap3
    if (tempo>60){
        tempo =  tempo/60
        console.log(tempo + " minutos")}
 
    var tempo = verde.lap1 + verde.lap2 + verde.lap3
    if (tempo>60){
        tempo =  tempo/60
        console.log(tempo + " minutos")}

    var tempo = amarelo.lap1 + amarelo.lap2 + amarelo.lap3
    if (tempo>60){
        tempo =  tempo/60
        console.log(tempo + " minutos")}
    else {
        console.log(tempo + " segundos")
    }

    
}
soma()