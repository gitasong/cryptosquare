$(document).ready(function() {
  $("#crypto").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#message").val());
    // console.log(number);
    // numCheck(number);
    // singleDigit(number);
    // multiSymbol(number);
    $("#result").text(crypto(message));
  });
});
