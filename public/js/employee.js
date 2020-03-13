$(document).ready(function() {
  function runTableQuery() {
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: "/api/orders", method: "GET" }).then(function(tableData) {
      // Here we then log the tableData to console, where it will show up as an object.
      console.log(tableData);
      console.log("------------------------------------");

      // Loop through and display each of the customers
      for (var i = 0; i < tableData.length; i++) {
        // Get a reference to the tableList element and populate it with tables
        var holdsTable = $("#holdsTable");

        // Then display the fields in the HTML (Section Name, Date, URL)
        holdsTable.append(
          $("<div class='row'>"),
          $("<span>").text(tableData[i].name),
          $("<span>").text(tableData[i].drink_type),
          $("<span>").text(tableData[i].size),
          $("<span>").text(tableData[i].add_1),
          $("<span>").text(tableData[i].add_2),
          $("<button>").attr("id", "incompleteOrder")
        );
      }
    });
  }
  runTableQuery();

  $("#holdsTable").on("click", "#incompleteOrder", function() {
    if (this.id === "incompleteOrder") {
      this.id = "completeOrder";
    }
  });
  $("#holdsTable").on("click", "#completeOrder", function() {
    if (this.id === "completeOrder") {
      this.id = "incompleteOrder";
    }
  });
});
