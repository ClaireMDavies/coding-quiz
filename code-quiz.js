//creating global variables necessary for the following functions
var interval = setInterval(countdown, 1000);
const minSeconds = 0;
var elapsedSeconds = 75;
var correctAnswers = ["question1Answer4", "question2Answer3", "question3Answer4", "question4Answer3", "question5Answer2"];
var currentQuestionNumber = 1

//coundown timer and initiating end screen
function countdown() {
    if (elapsedSeconds <= minSeconds) {
        $(".question").css("display", "none");

        $("#finish-screen").css("display", "block");
        clearInterval(interval);

        $("#timer").text("0");
    }
    else {
        --elapsedSeconds;
        $("#timer").text(elapsedSeconds);
    }
}


$(document).ready(function()
{
    $("#start").click(function () {
        $("#start-screen").css("display", "none");
        $("#question" + currentQuestionNumber).css("display", "block");
        countdown(interval);
    });

    $(".answer").click(function () {
        var answerId = $(this).attr("id");

        if (correctAnswers.includes(answerId))
        {
            // answer is correct

            $("#question" + currentQuestionNumber).css("display", "none");
            ++currentQuestionNumber;

            if (currentQuestionNumber <= correctAnswers.length)
            {
                // next question
                $("#question" + currentQuestionNumber).css("display", "block");
            }
            else
            {
                clearInterval(interval);
                $("#finish-screen").css("display", "block");
            }
        }
        else
        {
            // answer is wrong

            if (elapsedSeconds < 10)
            {
                elapsedSeconds = 0;
            }
            else
            {
                //deduct time for wrong answer
                elapsedSeconds -= 10;
                $("#timer").text(elapsedSeconds);
                $("#question" + currentQuestionNumber).css("display", "none");
                ++currentQuestionNumber;
                
                if (currentQuestionNumber <= correctAnswers.length)
            {
                // next question
                $("#question" + currentQuestionNumber).css("display", "block");
            }
            else
            {
                clearInterval(interval);
                $("#finish-screen").css("display", "block");
            } 
                $("#question" + currentQuestionNumber).css("display", "block");
            }
        }
    });
});









//function to record hi score


