$(document).ready(function() {
  var nameField = localStorage.getItem("nameField");
  var drink_type = localStorage.getItem("drink_type");
  var add_1 = localStorage.getItem("add_1");
  var add_2 = localStorage.getItem("add_2");
  var size = localStorage.getItem("size");
  var QRimage = $("h2#QRimage");
    // Getting references to our form and inputs
  var logOutButton = $("button#logout");
  var makeNewOrder = $("button#another");

    // When the form is submitted, we validate there's an email and password entered
  logOutButton.on("click", function(event) {
    event.preventDefault();
    logoutUser();
  });

  makeNewOrder.on("click", function(event) {
    event.preventDefault();
    makeAnother();
  });

  function makeAnother() {
    location.href = "../orderform.html";
  }

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function logoutUser() {
    $.get("/logout")
      .then(function() {
        window.location.replace("./");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.error(err);
      });
  }
  var QRdata =
    nameField + " " + drink_type + " " + add_1 + " " + add_2 + " " + size;

  function generateQR() {
    QRimage.append(
      $(
        "<img class='center' src = 'https://api.qrserver.com/v1/create-qr-code/?data=" +
          QRdata +
          "&amp;size=100x100'>"
      )
    );
  }

  generateQR();

});
