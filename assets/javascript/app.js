var correct = 0;
var incorrect = 0;
// var time;
var wins = 0;
var losses = 0;
var intervalVar;
var currentindex = 0;
var currQuest;
var questions = [{
    question: "What is the name of the American animated sci-fi sitcom about the misadventures of a mad scientist and his grandson?",
    answers: ["Rick and Morty", "Jim meets world", "Chelsea", "The Oroville"]
}, {
    question: "'Torchwood' is an anagram and spin-off of what popular British sci-fi series?",
    answers: ["Doctor Who", "Dirk Gentley's Holistic Detective Agency", "Utopia", "Wodorotch"]
}, {
    question: "Star Trek: The Next Generation originally aired in what year?",
    answers: ["1987", "1967", "1992", "2001"]
}, {
    question: "What is the unit of length that is approximately 3.26 light-years?",
    answers: ["Parsec", "Interstellar Yard", "Astronomical Unit", "Gigametre"]
}, {
    question: "Bruce Willis played a convict turned time traveler in what 1995 movie?",
    answers: ["12 Monkeys", "Die Hard", "Water World", "The Fifth Element"]
}];

function startRound() {
    clearInterval(intervalVar);
    // startTimer();
    if (currentindex === questions.length) {
        displayResults();
        exit();
    }
    $("#answers").empty();
    $("#question").empty();
    $("#time").html("Time remaining: ");
    currQuest = questions[currentindex];
    $("#question").html(currQuest.question);
    var newUL = $("<ul>");
    for (var i = 0; i < currQuest.answers.length; i++) {
        var newLI = $("<li>");
        newLI.addClass("items");
        newLI.attr("data-index", i);
        $(newLI).data("id", i);
        newLI.text(currQuest.answers[i]);
        $(newUL).prepend(newLI);
    }
    $("#answers").append(newUL);
    startTimer();
    currentindex++;
}

function startTimer() {
    var time = 30;
    intervalVar = setInterval(function() {
        if (time <= 0) {
            clearInterval(intervalVar);
            lose();
        }
        time--;
        $("#time").html("Time remaining: " + time);
    }, 1000);
}

function win() {
    wins++;
    clearInterval(intervalVar);
    $("#time").empty();
    $("#answers").empty();
    $("#answers").html("<h3>You Win!</h3>");
    setTimeout(function() {
        startRound();
    }, 1000 * 2);
}

function lose() {
    losses++;
    time = 30;
    clearInterval(intervalVar);
    $("#time").empty();
    $("#answers").empty();
    console.log(currQuest.answers[0]);
    $("#answers").html("<h2>You Lose!</h2><h3>Correct answer is: " + currQuest.answers[0] + "</h3>");
    setTimeout(function() {
        startRound();
    }, 1000 * 2);
}

function checkAnswer() {
    var answer = $(this).attr("data-index");
    console.log(answer);
    if (answer == 0) {
        win();
    } else {
        lose();
    }
}

function reset() {
    time = 30;
    wins = 0;
    losses = 0;
    currentindex = 0;
    clearInterval(intervalVar);
    startRound();
}

function displayResults() {
    clearInterval(intervalVar);
    $("#time").empty();
    $("#question").empty();
    $("#answers").empty();
    var btn = $("<button>");
    btn.text("Restart Game");
    btn.addClass("btn-warning");
    btn.on("click", reset);
    $("#answers").html("<h3>Results:</h3><p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
    $("#answers").append(btn);
}
$(document).on("click", ".items", checkAnswer);

$(document).ready(function() {
    $("#time").html("30");
    startRound();
});