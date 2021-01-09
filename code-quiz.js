$(document).ready(function()
{
    $("#start").click(function () {
        $("#start-screen").css("display", "none");
        $("#question" + currentQuestionNumber).css("display", "block");
    });

});


//creating global variables necessary for the following functions
var interval = setInterval(countdown, 1000);
const minSeconds = 0;
var elapsedSeconds = 75;
const correctAnswers = ["question1Answer4", "question2Answer3", "question3Answer4", "question4Answer3", "question5Answer2"];
var currentQuestionNumber = 1

//function to display questions


//function for countdown timer
function countdown() {
    if (elapsedSeconds <= minSeconds) {

        $("#finish-screen").css("display", "block")

    }

    else {
        --elapsedSeconds;
        $("#timer").text(elapsedSeconds);


    }


}





//function to determine correct answers

//function to deduct time for wrong answers
//function to record hi score


