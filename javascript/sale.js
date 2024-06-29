const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

const products = [
  { id: 0, name: "Mezcla original 200g", price: 500 },
  { id: 1, name: "Mezcla original 500g", price: 900 },
  { id: 2, name: "Mezcla especial 200g", price: 700 },
  { id: 3, name: "Mezcla especial 500g", price: 1200 },
];

function add() {
  const productId = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  const product = products.find(p => p.id === productId);

  if (!product) {
    window.alert("Por favor, seleccione un producto válido.");
    return;
  }

  let purchase = {
    id: product.id,
    name: product.name,
    price: product.price,
    number: number,
  };
  purchases.push(purchase);
  window.alert(`${display()}\nSubtotal: ${subtotal()} Yenes`);
}

function display() {
  let string = "";
  for (let i = 0; i < purchases.length; i++) {
    string += `${purchases[i].name}: ${purchases[i].price} Yenes x ${purchases[i].number} unidades\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  let orderDetails = `${display()}\nSubtotal: ${sum} Yenes\nGastos de envío: ${postage} Yenes\nTotal: ${sum + postage} Yenes`;
  window.alert(orderDetails);
  purchases = [];
  priceElement.value = "0";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum === 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}