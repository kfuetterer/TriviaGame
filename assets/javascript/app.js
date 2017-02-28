window.onload = function() {

var question = ["Which planet in our solar system has the most oxygen?","What is the melting point of ice in Fahrenheit?","What does the acronym 'NASA' stand for?","How many planets in our solar system have moons?","What layer of the atmosphere lies between the troposphere and mesosphere?"];
var answerOne = ["Saturn","72 Degrees","National Aeronautics and Space Administration","5", "Exosphere"];
var answerTwo = ["Earth","0 Degrees","Network Aerospace and Sciences Association","8","Stratosphere"];
var answerThree = ["Jupiter","100 Degrees","Navigation Aircraft and Sciences Administration", "7","Lenoshere"];
var answerFour = ["Neptune","32 Degrees","Naval Air and Space Association","6","Thermosphere"];
var showQuestion;
var count = 0;
var time = 20;
var intervalId;

$("#start").click(startGame);

function startGame() {
	$("#timer").html("00:20");
	showQuestion = setInterval(nextQuestion, 20000);
	document.querySelector("#explanation").style.opacity = "0";
	document.querySelector("#start").style.opacity = "0";
  	intervalId = setInterval(counting, 1000);
  	displayQuestion();
};

function displayQuestion() {
	document.querySelector("#explanation").style.opacity = "0";
	$("#question").html("<h3>" + question[count] + "</h3>");
	$("#aOne").html("<p>" + answerOne[count] + "</p>");
	$("#aTwo").html("<p>" + answerTwo[count] + "</p>");
	$("#aThree").html("<p>" + answerThree[count] + "</p>");
	$("#aFour").html("<p>" + answerFour[count] + "</p>");
};

function nextQuestion() {
  count++;
  setTimeout(displayQuestion, 5000);
  document.querySelector("#explanation").style.opacity = "1";
  $("#explanation").html("<p>Time is up.</p>");

	if (count === 5) {
		clearInterval(count);
		clearInterval(time);
		$("#correct").html("<p>Game Over.</p><p>You got blank out of blank correct.");
	}
};

function counting() {
	time--;
	var converted = timeConverter(time);
	$("#timer").html(converted);

	if (time === 0) {
		$("#question").html("<h></h3>");
		$("#aOne").html("<p></p>");
		$("#aTwo").html("<p></p>");
		$("#aThree").html("<p></p>");
		$("#aFour").html("<p></p>");
		startGame();
	}
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

var first = document.getElementById("aOne");
var second = document.getElementById("aTwo");
var third = document.getElementById("aThree");
var fourth = document.getElementById("aFour");

first.onclick = function(){

}

second.onclick = function(){

}

third.onclick = function(){

}

fourth.onclick = function(){

}

}
