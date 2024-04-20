async function GetAllProducts() {
  let res = await fetch("http://localhost:3000/products",{method:"POST"});
  let products = await res.json();
  console.log(products);
}

document.addEventListener("DOMContentLoaded", GetAllProducts);
