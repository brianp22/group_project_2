/* eslint-disable camelcase */
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  var nameField = $("input#nameField");
  var drink_type = $("select#drink_type");
  var add_1 = $("select#add_1");
  var add_2 = $("select#add_2");
  var size = $("select#size");
  var submitOrder = $("button#submitOrder");

  function goToQR() {
    location.href = "../QR.html";
  }

  function writeLocalStorage() {
    localStorage.setItem("nameField", nameField.val());
    localStorage.setItem("drink_type", drink_type.val());
    localStorage.setItem("add_1", add_1.val());
    localStorage.setItem("add_2", add_2.val());
    localStorage.setItem("size", size.val());
  }

  submitOrder.on("click", function(event) {
    event.preventDefault();

    // Here we grab the form elements
    var newOrder = {
      name: nameField.val().trim(),
      drink_type: drink_type.val(),
      size: size.val(),
      add_1: add_1.val(),
      add_2: add_2.val()
    };

    console.log(newOrder);

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    $.post("/api/orders", newOrder, function() {
      alert("Yay! Your order has been pushed");

      // Clear the form when submitting
      writeLocalStorage();
      nameField.val("");
      drink_type.val("");
      add_1.val("");
      add_2.val("");
      size.val("");

      goToQR();
    });
  });
});
