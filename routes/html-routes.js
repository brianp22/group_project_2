// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/orderform.html");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/api/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  ///Route for taking you to the employee page
  app.get("/employee.html", function(req, res) {
    res.redirect("/employee.html");
  });
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/orderform.html");
    }
    res.sendFile(path.join(__dirname, "../public/orderform.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/orderform", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/orderform.html"));
  });
};
