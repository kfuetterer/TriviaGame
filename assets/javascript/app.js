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

function displayQuestion() {
	$("#question").html("<p>" + question[count] "</p>");
	$("#aOne").html("<p>" + answerOne[count] + "</p>");
	$("#aTwo").html("<p>" + answerTwo[count] + "</p>");
	$("#aThree").html("<p>" + answerThree[count] + "</p>");
	$("#aFour").html("<p>" + answerFour[count] + "</p>");
};

function nextQuestion() {
  count++;
  setTimeout(displayQuestion, 5000);
};

function startGame() {
	$("#timer").html("00:20");
	document.querySelector("#explanation").style.opacity = "0";
	document.querySelector("#start").style.opacity = "0";
  	showQuestion = setInterval(count, 20000);
  	intervalId = setInterval(counting, 1000);
};

function counting() {
	time--;
	var converted = timeConverter(time);
	$("#timer").html(converted);
}

if (changeTimer = 00:00) {
	clearInterval(count);
	document.querySelector("correct").innerHTML = "You lose";
}

  timeConverter: function(t) {
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

displayQuestion();

var first = document.getElementById("aOne");
var second = document.getElementById("aTwo");
var third = document.getElementById("aThree");
var fourth = document.getElementById("aFour");

first.onclick = function(){
    style.backgroundColor = "red";
}

second.onclick = function(){
    style.backgroundColor = "red";
}

third.onclick = function(){
    style.backgroundColor = "red";
}

fourth.onclick = function(){
    style.backgroundColor = "red";
}

}
