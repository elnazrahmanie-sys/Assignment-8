function handleForm(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let style = document.getElementById("style").value;
  let product = document.getElementById("product").value;

  if (name === "") {
    alert("Name is required");
    return;
  }

  console.log(name);

  document.getElementById("result").innerText =
    name + ", we recommend a " + style + " " + product + " for you 💎";
}