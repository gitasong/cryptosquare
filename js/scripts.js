// enter back-end logic here
function alpha(msg) {
  // strips all non-alpha characters from a message string
  messageAlpha = msg.replace(/[^a-z,A-Z]/g, "").toLowerCase();
  return messageAlpha;
    console.log(messageAlpha);
}

function square(message) {
  // gets the size of the message square from the message length
  messageLength = alpha(message).length;
    console.log(message);
    console.log(alpha(message));
    console.log(messageLength);
  squareSize = parseInt(messageLength ** 0.5) + 1;
  return squareSize;
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
    $("#result").text(square(message));
  });
});
