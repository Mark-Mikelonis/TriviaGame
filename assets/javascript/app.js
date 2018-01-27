var correct = 0;
var incorrect = 0;
var time;
var intervalVar;
var currentindex=0;
var end

var questions = [{
	question: "What is the name of the American animated sci-fi sitcom about the misadventures of a mad scientist and his grandson?",
	answers: ["Rick and Morty",
			 "Jim meets world",
			 "Chelsea",
	         "The Oroville"]
},{
	question: "'Torchwood' is an anagram and spin-off of what popular British sci-fi series?",
	answers: ["Doctor Who",
	         "Dirk Gentley's Holistic Detective Agency",
	 		 "Utopia",
	         "Wodorotch"]
},{
	question: "Star Trek: The Next Generation originally aired in what year?",
	answers: ["1987",
	         "1967",
	         "1992",
	         "2001"]

},{
	question: "What is the unit of length that is approximately 3.26 light-years?",
	answers:  ["Parsec",
	          "Interstellar Yard",
	          "Astronomical Unit",
	          "Gigametre"]
},{
	question: "Bruce Willis played a convict turned time traveler in what 1995 movie?",
	answers:  ["12 Monkeys",
	          "Die Hard",
	          "Water World",
	          "The Fifth Element"]

}	];

intervalVar = setInterval(function(){
	
		startRound();
	
			
}, 1000 * 2);
function startRound(){
	
		$("#answers").empty();
		$("#question").empty();
		var currQuest = questions[currentindex];
		$("#question").html(currQuest.question);
		for(var i=0; i<currQuest.answers.length;i++){
			var newLI = $("<li>");
			newLI.addClass("items");
			newLI.attr("data-index", i);
			$(newLI).data("id", i);
			newLI.text(currQuest.answers[i]);
			$("#answers").append(newLI);

		}
	
	currentindex++;
	
	
	startTimer();

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
	alert("You win!")
}

function lose(){
	alert("You Lose!");
}
function checkAnswer(){
	var answer = $(this).attr("data-index");
	console.log(answer);
	if(answer == 0){
		win();
	} else {
		lose();
	}
	
	
}
$(document).on("click", ".items", checkAnswer);
$(document).ready(function(){
	$("#time").html("30");
	
	
	console.log(questions[0].question);
	startRound();
	

}); 