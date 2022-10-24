// Dada uma lista de valores (parametro list), printar valores que sao divisiveis por um outro valor (parametro x) CHECK

//function printDivisibleByX(list, x) {
//}


//console.log(printDivisibleByX[(3, 45, 1, 2, 5, 10, 14], 5)) // deve printar 45, 5, 10
//console.log(printDivisibleByX([2, 3, 45, 1, 453, 23, 22, 20], 2)) // deve printar 2, 22, 20


var row = [3, 45, 1, 2, 5, 10, 14];
var items = row.length; // number of items in your array

for (var i = 0; i < items; i++) { // iterate trough all the items
    var numberInRow = row[i]; // the number with index number i in rows
    var isDivisibleFor = numberInRow % 5 == 0; // true if the number is divisible for five

      if (isDivisibleFor) { // will execute if isDivisibleFor is true
        console.log("Esses são os números da lista:", row); 
        console.log("Esses números são diviseis por 5: ", numberInRow); // print number divisible for five to console.
    };
};

var row = [2, 3, 45, 1, 453, 23, 22, 20];
var items = row.length; // number of items in your array

for (var i = 0; i < items; i++) { // iterate trough all the items
    var numberInRow = row[i]; // the number with index number i in rows
    var isDivisibleFor = numberInRow % 2 == 0; // true if the number is divisible for two
    
      if (isDivisibleFor) { // will execute if isGreaterThan is true
        console.log("Esses são os números da lista:", row); 
        console.log("Esses números são diviseis por 2: ", numberInRow);// print number divisible for five to console.
  };
};
