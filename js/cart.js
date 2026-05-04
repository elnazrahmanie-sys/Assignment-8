// cart.js

document.addEventListener("DOMContentLoaded", function () {
  const plusButtons = document.querySelectorAll(".plus");
  const minusButtons = document.querySelectorAll(".minus");

  // PLUS BUTTONS
  plusButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const quantityInput = this.parentElement.querySelector(".quantity");

      let currentValue = parseInt(quantityInput.value);

      if (isNaN(currentValue)) {
        currentValue = 1;
      }

      quantityInput.value = currentValue + 1;

      updateTotal();
    });
  });

  // MINUS BUTTONS
  minusButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const quantityInput = this.parentElement.querySelector(".quantity");

      let currentValue = parseInt(quantityInput.value);

      if (isNaN(currentValue)) {
        currentValue = 1;
      }

      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }

      updateTotal();
    });
  });

  // TOTAL CALCULATION
  function updateTotal() {
    let total = 0;

    const rows = document.querySelectorAll("tbody tr");

    rows.forEach(function (row) {
      const quantity = parseInt(
        row.querySelector(".quantity").value
      );

      const priceText = row.querySelector("td:nth-child(3)").textContent;
      const price = parseFloat(priceText.replace("$", ""));

      total += quantity * price;
    });

    document.getElementById("cart-total").textContent =
      "Total: $" + total;
  }

  updateTotal();

});

const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", function () {
  alert("Proceeding to checkout 💳");
});
function removeRow(button) {
  const row = button.closest("tr");
  row.remove();
  updateTotal();
}