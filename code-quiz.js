//creating global variables necessary for the following functions
var interval;
var remainingSeconds = 75;
var correctAnswers = ["question1Answer4", "question2Answer3", "question3Answer4", "question4Answer3", "question5Answer2"];
var currentQuestionNumber = 1
var highScores = [];


$(document).ready(function()
{
    $("#start").click(function () {
        $("#start-screen").css("display", "none");
        $("#question" + currentQuestionNumber).css("display", "block");
        
        interval = setInterval(countdown, 1000);
        
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
                // that was the last question
                clearInterval(interval);
                $("#finish-screen").css("display", "block");

                // display the score
                $("#yourscore").attr("value", remainingSeconds + " seconds");
            }
        }
        else
        {
            // answer is wrong

            if (remainingSeconds < 10)
            {
                remainingSeconds = 0;
            }
            else
            {
                //deduct time for wrong answer

                remainingSeconds -= 10;
                $("#timer").text(remainingSeconds);

                if (remainingSeconds <= 0)
                {
                    ranOutOfTime();
                }
                 
                $("#question" + currentQuestionNumber).css("display", "block");
                
            }
        }
    });

    //pushes data from input fields into the hi score list
    $("#submit-score").click(function() {
        
        var highScoreEntry = { initials: $("#input-initials").val(), score: remainingSeconds };
        highScores.push(highScoreEntry);

        displayScores();
        resetQuiz();
    });
    
    //clear the hi scores
    $("#clear").click(function(){
        highScores = [];
        displayScores();
    });

    //option to try again
    $("#try-again").click(function() {
        
        resetQuiz();
    });
});

// coundown timer and initiating end screen
function countdown() {

    if (remainingSeconds <= 0) {

        // timer has run out

        ranOutOfTime();
    }
    else {
        --remainingSeconds;
        $("#timer").text(remainingSeconds);
    }
}


//resetting quiz and resetting variables
function resetQuiz(){
    $("#finish-screen").css("display", "none");
    $("#out-of-time").css("display", "none");
    $("#start-screen").css("display", "block");
    currentQuestionNumber = 1;        
    remainingSeconds = 75;        
    $("#timer").text(remainingSeconds);
}

//When timer gets to zero, intiates different end screen
function ranOutOfTime(){
    $(".question").css("display", "none");

    $("#finish-screen").css("display", "none");
    $("#out-of-time").css("display", "block");

    clearInterval(interval);

    $("#timer").text("0");
    
}

function displayScores(){

    highScores = highScores.sort(function(a, b){
        return b.score - a.score;
    });

    $("#score-list").empty();

    for (var i=0; i < highScores.length; i++)
    {
        $("#score-list").append("<li>" + highScores[i].initials + "=" + highScores[i].score + "</li>");
    }
};

