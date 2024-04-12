var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

function nextSequence(){

    userClickedPattern = [];

    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);
    
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut().fadeIn();
    
    playSound(randomChosenColour);
    
    $("#level-title").text("Level " + level);

    level++;


} 

$(".btn").on("click", function () {
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
})

function playSound(name){
    var sound = "sounds/" + name + ".mp3";;
    var audio = new Audio(sound);
    audio.play();
}

function animatePress(currentColour){
        $("#" + currentColour).addClass("pressed");
        setTimeout(function ()  {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
}

$(document).on("keypress", function() {
    nextSequence();
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
        }, 1000);
        }
    }

    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];

}