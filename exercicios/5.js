// Dado uma lista de numeros
// printar cruzeiro, se ele for divisivel por 3
// printar cabuloso, se ele for divisivel por 5
// e se ele for divisivel por 3 e por 5 nao printar nada acima alem de galo doido

function printaElementosLista(lista) {
    for (var i = 0; i < lista.length; i = i +1) {
        console.log ("Na lista é issaqui", lista[i])
        if (lista[i] % 3 == 0 && lista[i] % 5 == 0) {
            console.log ("Galo DOIODOOO", lista[i]) 
        }
        else if (lista[i]  % 3 == 0) {
            console.log ("Cruzeiro", lista[i])
        }
        else if (lista[i] % 5 == 0) {
            console.log ("Cabuloso", lista[i])
            }
        }
    }
 printaElementosLista([3, 5, 9, 12, 15, 18, 21, 30, 150]);
//printaElementosLista([1,3,45,7]);
//printaElementosLista([1,3,4, 327, 128, 32]);
//printaElementosLista([1,3,4, 327, 128, 32, 12982, 327, 238]);
