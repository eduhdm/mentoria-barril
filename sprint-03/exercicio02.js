// Dado uma lista de valores (parametro list), printar valores que sao maiores que um valor (parametro value) CHECK

// Implemente essa funcao
//printGreaterThanX();{}

function printGreaterThanX(list, x) {
  for (const item of list) {
    console.log(item);
  }
}

console.log(printGreaterThanX([2, 3, 4, 423, 54, 312, 312, 31245], 5000)); // deve printar 31245

console.log(printGreaterThanX([-100, 200, 32, 100], -20)); // deve printar 200, 32, 100

var row = [2, 3, 4, 423, 54, 312, 312, 31245];
var items = row.length; // number of items in your array

for (var i = 0; i < items; i++) {
  // iterate trough all the items
  var numberInRow = row[i]; // the number with index number i in rows
  var isGreaterThan = numberInRow > 5000; // true if the number is greater than ten

  if (isGreaterThan) {
    // will execute if isGreaterThan is true
    console.log("Esses são os números da lista:", row);
    console.log("Esses números são maiores que 5000: ", numberInRow); // print number greater than 10 to console.
  }
}

var row = [-100, 200, 32, 100]; //row[];
var items = row.length; // number of items in your array

for (var i = 0; i < items; i++) {
  // iterate trough all the items
  var numberInRow = row[i]; // the number with index number i in rows
  var isGreaterThan = numberInRow > -20; // true if the number is greater than ten

  if (isGreaterThan) {
    // will execute if isGreaterThan is true
    console.log("Esses são os números da lista:", row);
    console.log("Esses números são maiores que -20: ", numberInRow); // print number greater than 10 to console.
  }
}

/*Notas malucas pra tirar dúvida!
  const arr = [2, 3, 4, 423, 54, 312, 312, 31245];
  const threshold = 0;
  const findGreater = (arr, num) => {

    const res = [];
      for(let i = 0; i < arr.length; i++){
          if(arr[i] > num){
            continue;
      };
        res.push(arr[i]);
   };
   return res;
};
console.log(findGreater(arr, threshold));*/
