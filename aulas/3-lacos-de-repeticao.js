//  for(inicializacao; condicao de parada; incremento)
function contaNumeros(tipoContagem) {
  var valorDeSaida = "";
  if (tipoContagem == "sequencial") {
    for (var i = 0; i < 10; i = i + 1) {
      valorDeSaida = valorDeSaida + " " + i;
    }
    console.log(valorDeSaida);
  }

  if (tipoContagem == "pares") {
    for (var i = 0; i < 10; i = i + 2) {
      valorDeSaida = valorDeSaida + " " + i;
    }
    console.log(valorDeSaida);
  }

  if (tipoContagem == "impares") {
    for (var i = 0; i < 10; i = i + 1) {
      if (i % 2 != 0) {
        valorDeSaida = valorDeSaida + " " + i;
      }
    }
    console.log(valorDeSaida);
  }

  if (tipoContagem == "multiplos") {
    for (var i = 1; i < 100; i = i * 2) {
      valorDeSaida = valorDeSaida + " " + i;
    }
    console.log(valorDeSaida);
  }
}

contaNumeros("sequencial");
contaNumeros("pares");
contaNumeros("impares");
contaNumeros("multiplos");
