// Dado uma lista de valores (parametro list), indicar se a variável x está presente na lista.

function isXPresentInList(list, x) {
  // Implemente essa funcao
}

console.log(isXPresentInList([3, 45, 1, 2, 5, 10, 14], 5)); // deve a mensagem "Sim"
console.log(isXPresentInList([2, 3, 45, 1, 453, 23, 22, 20], 69)); // deve printar a mensagem "Nao"

var row = [3, 45, 1, 2, 5, 10, 14];
var items = row.length; // number of items in your array

  for (var i = 0; i < items; i++) { // iterate trough all the items

    var numberInRow = row[i]; // the number with index number i in rows
      if (isContained = numberInRow == 5) // true if the number is greater than ten

      if (isContained) { // will execute if isContained is true
        numberInRow = isContained;
          console.log("Esses são os números da lista:", row); 
          console.log("O número 5 está presente nesse intervalo: ", numberInRow); // print number greater than 10 to console.
    };
};

var row = [2, 3, 45, 1, 453, 23, 22, 20];
var items = row.length; // number of items in your array

for (var i = 0; i < items; i++) { // iterate trough all the items
    var numberInRow = row[i]; // the number with index number i in rows
    if (isntContained = numberInRow !== 69){ // true if the number is equal to sixty nine

    if (isContained) { // will execute if isContained is true
      numberInRow = isContained;
      console.log("Esses são os números da lista:", row); 
      console.log("O número 69 está presente nesse intervalo: ", numberInRow); // print number greater than 10 to console.
    }
    if (isntContained = numberInRow !== 69) {

    if (isntContained) {
      console.log("Esses são os números da lista:", row); 
      console.log("O número 69 está presente nesse intervalo: ", false);
    };
  }
}