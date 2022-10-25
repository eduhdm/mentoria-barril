// Dado uma lista de valores (parametro list), indicar se a variável x está presente na lista.

function isXPresentInList(list, x) {
  for (const item of list) {
    if (item == x) {
      console.log("o item", item, " está na lista", list);
      return true;
    }
  }

  console.log("o item", item, "nao está na lista");
  return false;
}

console.log(isXPresentInList([3, 45, 1, 2, 5, 10, 14], 5)); // deve a mensagem "Sim"
console.log(isXPresentInList([2, 3, 45, 1, 453, 23, 22, 20], 69)); // deve printar a mensagem "Nao"
