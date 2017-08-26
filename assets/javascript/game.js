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
  
        var gemsBtn = $("<button><img src=\"assets/images/" + gems[i] + ".png\">")
            .addClass("gem " + gems[i])
            .attr("value", gemval);

        $("#buttons").append(gemsBtn);

        console.log('gems', gems[i])
    }

     // add click handlers to gems
     $(".gem").on('click', function  (){
        var number = $(this).val();
        console.log('cliked!', number);
    });

});