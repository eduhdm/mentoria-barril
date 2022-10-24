function printNumbers1(list) {
  for (const item of list) {
    console.log(item);
  }
}

function printNumbers2(list) {
  for (let i = 0; i < list.length; i++) {
    const isGreaterThan = list < 3;
    if (isGreaterThan){
    console.log(list[i]);
    }
  }
}

console.log("print");
printNumbers1([1, 2, 3, 4]);
console.log("print");
printNumbers2([1, 2, 6, 4]);
console.log("print");
printNumbers2([1, 312, 3, 123, 12, 2, 3, 4]);
