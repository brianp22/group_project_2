$(document).ready(function() {
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
});
