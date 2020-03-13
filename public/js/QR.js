/* eslint-disable camelcase */
$(document).ready(function() {
  var nameField = localStorage.getItem("nameField");
  var drink_type = localStorage.getItem("drink_type");
  var add_1 = localStorage.getItem("add_1");
  var add_2 = localStorage.getItem("add_2");
  var size = localStorage.getItem("size");
  var QRimage = $("h2#QRimage");

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
