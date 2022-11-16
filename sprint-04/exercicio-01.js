// Crie uma funcao que recebe uma lista de numeros e retorna o valor da média dos números
// retornar 0 se a lista for vazia

function calculateMean(arr) {
    var sum = 0
    if (arr.length === 0)
        return 0;

    for (var number of arr) {
        sum += number;
    }

    average = sum/arr.length;
    return average;
}

console.log(calculateMean([32, 3, 234, 12, 12, 1, 21, 32, 100]))
console.log(calculateMean([2, 3, 1, 89, 1, 1,21, 32, 100]))
console.log(calculateMean([1, 1, 1, 1, 1, 1, 1, 1]))
console.log(calculateMean([]))



/*
L1 = [32, 3, 234, 12, 12, 1, 21, 32, 100];
L2 = [2, 3, 1, 89, 1, 1,21, 32, 100];
L3 = [1, 1, 1, 1, 1, 1, 1, 1];
L4 = [];

calculateMean = [L1, L2, L3, L4];


for (var i=0; i < calculateMean.length; i++){
    if (calculateMean == 0){
        console.log("Lista com 0 itens nela")
    } else {
        console.log(calculateAverage(calculateMean))   
    }
}
function calculateAverage(array) {
    var total = 0;
    var count = 0;
    array.forEach(function(item, _calculateMean) {
        total += item;
        count++;
    });
    return total / count;    
} */
