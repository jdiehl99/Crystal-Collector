var gems = ["redGem", "blueGem", "greenGem", "yellowGem"];
var targetScore = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;

// create new random number between defined range
function newRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function resetGame() {
    currentScore = 0;
    $("#currentScore").html("Current score: " + currentScore);
    targetScore = newRandom(19,120);
    $("#targetScore").html("Target score: " + targetScore);
}

// generate target score between 19-120
var targetScore = newRandom(19, 120);
console.log(targetScore);
$("#targetScore").html("Target score: " + targetScore);

$(document).ready(function () {

    for (i = 0; i < gems.length; i++) {
        // generate random values for gems between 1-12
        var gemval = newRandom(1, 12);
        console.log('gemval', gemval);
  
        var gemsBtn = $("<button><img src=\"assets/images/" + gems[i] + ".png\">")
            .addClass("gem " + gems[i])
            .attr("value", gemval);

        $("#buttons").append(gemsBtn);

        console.log('gems', gems[i])
    }

     // add click handlers to gems
     $(".gem").on('click', function  (){
        var number = $(this).val();
        console.log('gem clicked', number);
        currentScore = parseInt(currentScore) + parseInt(number);
        console.log("current score updated",currentScore);
        $("#currentScore").html("Current score: " + currentScore);
        
        if (currentScore == targetScore) { // game over, player wins
            alert("You win!");
            wins++;
            $("#wins").html("Wins: " + wins);
            resetGame();
        }  else if (currentScore > targetScore) { // game over, player loses
            alert("Sorry, you went over.  You lose!");
            losses++;
            $("#losses").html("Losses: " + losses);
            resetGame();
        } 
    });

});