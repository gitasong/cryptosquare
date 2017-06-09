// enter back-end logic here
function square(num) {
  numLength = num.length;
  nearSquare = parseInt(numLength ** 0.5) + 1;
  return nearSquare;
}

function alpha(message) {
  // strips all non-alpha characters from a message string
  messageAlpha = message.replace(/[^a-z,A-Z]/g, "").toLowerCase();
  return messageAlpha;
}


// enter front-end logic here
$(document).ready(function() {
  $("#crypto").submit(function(event) {
    event.preventDefault();
    var message = $("input#message").val();
    // console.log(number);
    // numCheck(number);
    // singleDigit(number);
    // multiSymbol(number);
    $("#result").text(alpha(message));
  });
});
