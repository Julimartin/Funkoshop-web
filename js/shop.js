const total = document.getElementById("total");
const precio = document.getElementById("precio");
// const quantity = document-getElementById("quantity");

add.addEventListener('click', () => total.value = Number(precio.value) * Number(quantity.value));
substract.addEventListener('click', () => total.value = Number(precio.value) * Number(quantity.value));