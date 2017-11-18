var numbToGuess = Math.floor((Math.random() * 100) + 19);

$("#randomNumber").text(numbToGuess);

var wins = 0;
var losses = 0;

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

var yourNumber = 0

$("#yrNumb").text(yourNumber)

$(".crystal").on("click", function() {
	yourNumber++;
	console.log(yourNumber);
	$("#yrNumb").text(yourNumber);

  if (yourNumber === numbToGuess) {
	$("#yrNumb").text(yourNumber);
	alert("you win")
  }

})


