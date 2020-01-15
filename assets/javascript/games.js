//jquery document.ready 

$(document).ready(function() {

var songChoices = ['baby one more time', 'oops! i did it again', 'crazy', 'stronger', 'work bitch!', 'from the bottom of my broken heart', 'everytime', 'make me','piece of me', 'if you seek amy', 'womanizer', 'circus', 'i wanna go', '3', 'hold it against me', 'scream & shout'];

var win = 0;
var guessCountdown = 10;
var letterPressed = [];
var computerWord = songChoices[Math.floor(Math.random() * songChoices.length)].toUpperCase();
var GameEnd = false;

//replaces guessCount and Letters typed text
function userGuessCount() {
    document.querySelector("#guessCountdown").innerHTML = guessCountdown;
}
function userText() {
    document.querySelector("#userGuess").innerHTML = letterPressed;
}

//defining reset function
var reset = function() {
    guessCountdown = 10;
    letterPressed = [];
}

//if key pressed is A-Z range, as stated in function isAlpha, then run letterMatch function upon keypress
document.onkeypress = function(event){
    if(isAlpha(event.key) && !GameEnd) {
        letterMatch(event.key.toUpperCase());
    };
}

//game function. check to see if letter is in compputerWord
function letterMatch(){

}


//check to see if key pressed by user is A-Z
function isAlpha(ch){
    return/^[A-Z]$/i.test(ch);
}

// document.onkeyup = function(event) {
//     guessCountdown--;


//     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    
//     letterPressed.push(userGuess);


//     userGuessCount();
//     userText(); 

   
// if (userGuess === computerChoices) {
//     win++;
//     document.querySelector("#wins").innerHTML = "Wins: " + win;

   
//     reset();
// }

// else if (guessCountdown === 0){
//     reset();
// }

// };


});