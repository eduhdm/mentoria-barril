var subTotal = 0;

const items = {
    cafe_du_black: {
        name: 'Café du black',
        price: 6.99,
        quantity: 0,
    },
    cafe_mexicano: {
        name: 'Café Mexicano',
        price: 12,
        quantity: 0,
    },
    tortilla: {
        name: 'Tortilla de limão',
        price: 10,
        quantity: 0,
    },
}


    //acessar o objeto 
    // items["cafe_du_black"].quantity
    // items.cafe_du_black.quantity

function onAddItemQty(itemName) {
    if (!Object.keys(items).includes(itemName)) {
        alert('nome incorreto')
        return;
    }

    items[itemName].quantity += 1;
    subTotal += items[itemName].price
    _updateUi(itemName);
} 

function onMinusItemQty(itemName) {
    if (!Object.keys(items).includes(itemName)) {
        alert('nome incorreto')
        return;
    }

    if (items[itemName].quantity == 0){
        return;
    }

    items[itemName].quantity -= 1;
    subTotal -= items[itemName].price
    _updateUi(itemName)
} 

function _updateUi(itemName) {
    const itemEl = document.getElementById(itemName)
    const num = itemEl.querySelector('.num')
    num.innerText = items[itemName].quantity
    const subTotalEl = document.getElementById("subTotal")
    subTotalEl.innerText = subTotal.toFixed(2) 
}

function closeSubTotal (){
   alert('Voce é pobre, compra negada!') 
}