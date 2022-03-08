function digaOiPara(nome) {
  console.log("Oi " + nome + ", tudo bao?");

  if (nome.length > 4) {
    console.log("Seu nome é grande ein");
  } else {
    console.log("Seu nome é ruim");
  }
}

var nomePessoa = "Bao";
digaOiPara(nomePessoa);
digaOiPara("Eduardo");

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What is your name ? ", function (name) {
//   rl.question("Where do you live ? ", function (country) {
//     console.log(`${name}, is a citizen of ${country}`);
//     rl.close();
//   });
// });

// rl.on("close", function () {
//   console.log("\nBYE BYE !!!");
//   process.exit(0);
// });
