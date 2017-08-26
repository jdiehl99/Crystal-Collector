var computerChoices = ["PUG", "POODLE", "SCHNAUZER", "DOBERMAN", "BOXER", "CHIHUAHUA", "POMERANIAN", "BULLDOG", "LABRADOR", "DALMATION", "BEAGLE", "DACHSHUND", "GREYHOUND", "PEKINGESE"];
var wins = 0;
var losses = 0;
var guessesRemaining = 15;
var guessedSoFar = [];
var chosenWord = [];


// create new random number between defined range
function newRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// generate target score between 19-120
var targetScore = newRandom(19, 120);
console.log(targetScore);
document.querySelector("#targetScore").innerHTML = "Target score: " + targetScore;

// generate random values for gems between 1-12
var gems = ["redGem", "blueGem", "greenGem", "yellowGem"];

$(document).ready(function () {
    for (i = 0; i < gems.length; i++) {
        var gemval = newRandom(1, 12);
        console.log('gemval', gemval);
        var gemsBtn = $("<img src=\"assets/images/" + gems[i] + ".png\">")
            .addClass(gems[i])
            .attr("gem-val", gemval);

        $("#buttons").append(gemsBtn);

        console.log('gems', gems[i])

    }

    $(".redGem").on("click", function () {
        console.log("red gem pressed");
    });
    $(".blueGem").on("click", function () {
        console.log("blue gem pressed");
    });
    $(".yellowGem").on("click", function () {
        console.log("yellow gem pressed");
    });
    $(".greenGem").on("click", function () {
        console.log("green gem pressed");
    });
});