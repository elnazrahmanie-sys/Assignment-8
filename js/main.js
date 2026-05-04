function showProducts(category) {
  let allLists = document.querySelectorAll(".product-list");

  allLists.forEach(function(list) {
    list.style.display = "none";
  });

  document.getElementById(category).style.display = "block";
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {

  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}

function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.querySelectorAll(".product-card");

  products.forEach(card => {
    let name = card.innerText.toLowerCase();

    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.querySelectorAll(".card");

  products.forEach(card => {
    let text = card.innerText.toLowerCase();

    if (text.includes(input)) {
      card.parentElement.style.display = "block";
    } else {
      card.parentElement.style.display = "none";
    }
  });
}