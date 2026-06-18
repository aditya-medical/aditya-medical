function placeOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  if(name === "" || phone === "" || address === ""){
    alert("Please fill all details");
    return;
  }

  alert(
    "Order placed 🚀\n" +
    "Name: " + name + "\n" +
    "Phone: " + phone + "\n" +
    "Address: " + address
function placeOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  if(name === "" || phone === "" || address === ""){
    alert("Please fill all details");
    return;
  }

  let bill = "----- MEDICAL BILL -----\n";
  bill += "Name: " + name + "\n";
  bill += "Phone: " + phone + "\n";
  bill += "Address: " + address + "\n\n";
  bill += "Items:\n";

  cart.forEach(item => {
    bill += "- " + item + "\n";
  });

  bill += "\nThank You 🙏";

  alert(bill);
function placeOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  let message = "Order:\nName: " + name +
                "\nPhone: " + phone +
                "\nAddress: " + address;

  let whatsapp = "https://wa.me/8825253574?text=" + encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}

}
  );
}