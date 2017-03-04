window.onload = function() {

var question = ["Which planet in our solar system has the most oxygen?","What is the melting point of ice in Fahrenheit?","What does the acronym 'NASA' stand for?","How many planets in our solar system have moons?"];
var answerOne = ["Saturn","72 Degrees","National Aeronautics and Space Administration","5"];
var answerTwo = ["Earth","0 Degrees","Network Aerospace and Sciences Association","8"];
var answerThree = ["Jupiter","100 Degrees","Navigation Aircraft and Sciences Administration", "6"];
var answerFour = ["Neptune","32 Degrees","Naval Air and Space Association","7"];
var showQuestion;
var count = 0;
var time = 20;
var intervalId;
var answer;
var first = document.getElementById("aOne");
var second = document.getElementById("aTwo");
var third = document.getElementById("aThree");
var fourth = document.getElementById("aFour");
var win = 0;

$("#start").click(startGame);
$("#reset").click(reset);

function startGame() {
	startTime();
	showQuestion = setInterval(nextQuestion, 20000);
	document.querySelector("#explanation").style.opacity = "0";
	document.querySelector("#start").style.opacity = "0";
  	displayQuestion();
};

function startTime() {
	time = 20;
  	intervalId = setInterval(counting, 1000);
  	displayTime();
}

function displayTime() {
	time = 20;
	$("#timer").html("<p>00:20</p>");
}

function displayQuestion() {
	document.querySelector("#explanation").style.opacity = "0";
	$("#question").html("<h3>" + question[count] + "</h3>");
	first.style.color= "#555555";
	second.style.color= "#555555";
	third.style.color= "#555555";
	fourth.style.color= "#555555";
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
    first.style.background = "transparent";
    second.style.background = "transparent";
    third.style.background = "transparent";
    fourth.style.background = "transparent";
    	$("#question").html("<h3></h3>");
		$("#aOne").html("<p></p>");
		$("#aTwo").html("<p></p>");
		$("#aThree").html("<p></p>");
		$("#aFour").html("<p></p>");

    setTimeout(displayTime, 5000);
    time = 5;
    $("#timer").html("<p>00:05</p>");


    if (answer === true) {
    	$("#explanation").html("<p>Time is up.</p><p>Correct Answer!</p>");
	}

	if (answer === false) {
		if (count === 1) {
			$("#explanation").html("<p>Time is up.</p><p>Wrong Answer. The correct answer is: " + answerTwo[count - 1] + "</p>");
		}
		if (count === 2) {
			$("#explanation").html("<p>Time is up.</p><p>Wrong Answer. The correct answer is: " + answerFour[count - 1] + "</p>");
		}
		if (count === 3) {
			$("#explanation").html("<p>Time is up.</p><p>Wrong Answer. The correct answer is: " + answerOne[count - 1] + "</p>");
		}
		if (count === 4) {
			$("#explanation").html("<p>Time is up.</p><p>Wrong Answer. The correct answer is: " + answerThree[count - 1] + "</p>");
		}
	}

	if (count === 4) {
		clearInterval(showQuestion);
		clearInterval(intervalId);
		time = 0;
		$("#timer").html("<p>00:00</p>")
		$("#question").html("<h3></h3>");
		$("#aOne").html("<p></p>");
		$("#aTwo").html("<p></p>");
		$("#aThree").html("<p></p>");
		$("#aFour").html("<p></p>");
		document.querySelector("#reset").style.opacity = "1";
		document.querySelector("#reset").style.color = "#555555";
		$("#correct").html("<p>Game Over.</p><p>You got " + win + " out of 4 correct.");
	}
};

function counting() {
	time--;
	var converted = timeConverter(time);
	$("#timer").html(converted);
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
    	seconds = "0" + seconds;
    }

    if (seconds > 9) {
    	seconds;
    }

    if (minutes === 0) {
    	minutes = "00";
    }

    return minutes + ":" + seconds;
}

first.onclick = function(){
	second.style.background = "transparent";
	third.style.background = "transparent";
	fourth.style.background = "transparent";
	first.style.background = "#cccccc";
	first.style.background.opacity = ".5";
	first.style.color = "white";
	if (count === 2) {
		answer = true;
		win++;
	} else {
		answer = false;
	}
}

second.onclick = function(){
	fourth.style.background = "transparent";
	third.style.background = "transparent";
	first.style.background = "transparent";
	second.style.background = "#cccccc";
	second.style.background.opacity = ".5";
	second.style.color = "white";
 	if (count === 0) {
 		answer = true;
 		win++;
 	} else {
 		answer = false;
 	}
}

third.onclick = function(){
	fourth.style.background = "transparent";
	second.style.background = "transparent";
	first.style.background = "transparent";
	third.style.background = "#cccccc";
	third.style.background.opacity = ".5";
	third.style.color = "white";
	if (count === 3) {
		answer = true;
		win++;
	} else {
		answer = false;
	}
}

fourth.onclick = function(){
	first.style.background = "transparent";
	second.style.background = "transparent";
	third.style.background = "transparent";
	fourth.style.background = "#cccccc";
	fourth.style.background.opacity = ".5";
	fourth.style.color = "white";
	if (count === 1) {
		answer = true;
		win++;
	} else {
		answer = false;
	}
}

function reset() {
	time = 20;
	count = 0;
	win = 0;
	startGame();
}

}