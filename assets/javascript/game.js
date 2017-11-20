var numbToGuess;
var wins = 0;
var losses = 0;
var yourNumber = 0

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

var randNumb = function() {
  numberToGuess = Math.floor(Math.random() * (120-19) + 19);
  $("#randomNumber").text(numberToGuess);
}
randNumb();

var game = function () {
  $(".bevo").attr("data-crystalvalue", Math.floor(Math.random() * (12-1) + 1));
  $(".longhorn").attr("data-crystalvalue", Math.floor(Math.random() * (12-1) + 1));
  $(".stadium").attr("data-crystalvalue", Math.floor(Math.random() * (12-1) + 1));
  $(".tower").attr("data-crystalvalue", Math.floor(Math.random() * (12-1) + 1));
}
game();

$("#yrNumb").text(yourNumber);

$(".crystal").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  yourNumber += crystalValue;

  console.log(yourNumber);

  if (yourNumber === numberToGuess) {
	$("#yrNumb").text(yourNumber);
	alert("You win");
	game();
	randNumb();
	yourNumber = 0;
	$("#yrNumb").text(yourNumber);

  } else {
  	$("#yrNumb").text(yourNumber);
  }

  if (yourNumber > numberToGuess) {
	$("#yrNumb").text(yourNumber);
	alert("You lose");
	game();
	randNumb();
	yourNumber = 0;
	$("#yrNumb").text(yourNumber);
  }

})






