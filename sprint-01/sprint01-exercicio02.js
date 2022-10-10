const eu = {
    nome: "Barril",
    sobrenome: "Barrilete",
    idade: 27, 
    altur: 1.9,
    cpf: "7 bala nu tambo",
};

console.log("Esse é o " + eu.nome + eu.sobrenome, " ele possui " +  eu.idade +  " de idade. Ele tem "  + eu.cpf  + " e sua altura é " +  eu.altur);


function checaIdade(idade) {
    if (idade < 18)
    {
        return "Menor safado quer beiçar a chiboquinha né?! Rapa fora cumpade!";
    }
    else if (idade >= 18)
    {
        return "Os dedo tá até inchado véi, essa é a última dose se não eu vou ligar pra tua mulher!";
    }
}

console.log('posso beber?', checaIdade(eu.idade) )


