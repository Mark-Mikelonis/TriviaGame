var correct = 0;
var incorrect = 0;
var time;
var intervalVar;

var questions = [{
	question: "What is the name of the American animated sci-fi sitcom about the misadventures of a mad scientist and his grandson?",
	answer1: "Rick and Morty",
	answer2: "Jim meets world",
	answer3: "Chelsea",
	answer4: "The Oroville"
},{
	question: "'Torchwood' is an anagram and spin-off of what popular British sci-fi series?",
	answer1: "Doctor Who",
	answer2: "Dirk Gentley's Holistic Detective Agency",
	answer3: "Utopia",
	answer4: "Wodorotch"
},{
	question: "Star Trek: The Next Generation originally aired in what year?",
	answer1: "1987",
	answer2: "1967",
	answer3: "1992",
	answer4: "2001"

},{
	question: "What is the unit of length that is approximately 3.26 light-years?",
	answer1:  "Parsec",
	answer2:  "Interstellar Yard",
	answer3: "Astronomical Unit",
	answer4: "Gigametre"
},{
	question: "Bruce Willis played a convict turned time traveler in what 1995 movie?",
	answer1:  "12 Monkeys",
	answer2:  "Die Hard",
	answer3: "Water World",
	answer4: "The Fifth Element"

}	];

$(document).ready(function(){
	$("#time").html("30");
	
	loadQuestion(questions);
	console.log(questions[0].question);
	startTimer();

}); 

function loadQuestion(arr){
	for( var i=0; i<arr.length; i++){

		var question = questions[i];
		intervalVar = setInterval(function(){
			$("#question").html(question.question);
			loadAnswers(question);
		}, 1000 * 10);
		
		// debugger;
	}
}

function loadAnswers(questionObj){
	$("#answers").empty();
	for(var i=1;i<=4;i++){
		var newLI = $("<li>");
		var ansStr = "answer" + i;
		console.log(questionObj.answer1);
		$(newLI).text(questionObj.answer1);
		$("#answers").append(newLI);
	}
	
}
function startTimer(){
	time = 30;
	// while(time > 0){
		setInterval(function(){
			time--;
			$("#time").html(time);
		}, 1000);
	// }
}
function win(){

}

function lose(){

}