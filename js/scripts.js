// enter back-end logic here
function alpha(message) {
  // strips all non-alpha characters from a message string
  messageAlpha = message.replace(/[^a-z,A-Z]/g, "").toLowerCase();
  return messageAlpha;
    // console.log(messageAlpha);
};

function square(messageAlpha) {
  // gets the size of the message square from the message length
  messageLength = alpha(messageAlpha).length;
    // console.log(message);
    // console.log(alpha(message));
    // console.log(messageLength);
  squareSize = parseInt(messageLength ** 0.5) + 1;
  return squareSize;
};

// slice messageAlpha into squareSize slices, put each into array?

function arrange(messageAlpha, squareSize) {
  // takes string and arranges it into a mutli-dimensional array of len rows and columns
  // var messageAlpha = alpha(message);
  // var squareSize = square(messageAlpha);
  var messageAlpha = "thecrowfliesatdawn";
  var squareSize = 5;
  var messageSquare = [];

  var m = 0;
  for (var i = 0; i < squareSize; i ++){
    messageSquare[i] = [];
    for (var j = 0; j < squareSize; j++) {
      messageSquare[i].push(messageAlpha[m]);
      m++;
    };
  };

  // for (m = 0; m < messageAlpha.length; m += 1) {
  //   for (i = 0; i < squareSize; i += 1); {
  //     for (j = 0; j < squareSize; j += 1) {
  //       messageSquare[i][j].push(messageAlpha[m]);
  //       console.log(messageAlpha[m], messageSquare[i][j]);
  //     };
  //   };
  // };
  console.log(messageSquare);
  return messageSquare;
};

// enter front-end logic here
$(document).ready(function() {
  $("#crypto").submit(function(event) {
    event.preventDefault();
    var message = $("input#message").val();
    // squareArray = arrange(alpha(message), square(messageAlpha));
    $("#result").text(arrange("thecrowfliesatdawn", 5));
  });
});
