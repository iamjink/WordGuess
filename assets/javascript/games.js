//jquery document.ready 

$(document).ready(function() {

// choices
var userChoices = ['baby one more time', 'oops! i did it again', 'crazy', 'stronger', 'work bitch!', 'from the bottom of my broken heart', 'everytime', 'make me','piece of me', 'if you seek amy', 'womanizer', 'circus', 'i wanna go', '3', 'hold it against me', 'scream & shout'];


//randomizing letter choices that user can type from userChoices array. math.floor() returns largest element less than or equal to in array
var computerChoices = userChoices[Math.floor(Math.random() * userChoices.length)]; 

//setting each variable to start
var win = 0;
var losses = 0;
var guessCountdown = 10;
var letterPressed = [];

//defining each function and changing text in the scoreBoard div

//replaces guess count down number 
function userGuessCount() {
    document.querySelector("#guessCountdown").innerHTML = guessCountdown;
}

//replaces text #userGuess from HTML to "your guess so far: key pressed"
function userText() {
    document.querySelector("#userGuess").innerHTML = letterPressed;

}

//defining reset function to set guessCountdown back to 9 and letterPressed to start over
var reset = function() {
    guessCountdown = 10;
    letterPressed = [];
}


//onkeyup function; this function triggers when a key is pressed
document.onkeyup = function(event) {
    
    //guesscountdown number decrements
    guessCountdown--;

    // defines userGuess as the key that user presses
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    //pushes key pressed (userGuess) by user into letter pressed.
    letterPressed.push(userGuess);

    //runs the functions defined above on keyup
    userGuessCount();
    userText(); 

    //if key pressed by user (userGuess) is equal to randomized computer choice, then win number increase by 1
if (userGuess === computerChoices) {
    win++;
    document.querySelector("#wins").innerHTML = "Wins: " + win;

    //when win increases by 1, then reset function happens
    reset();
}

//if the guess countdown goes to 0, then loss number increase by 1
else if (guessCountdown === 0){
    losses++;
    document.querySelector("#currentWord").innerHTML = losses;
    
    //when guessCountdown goes to 0, then reset function happens
    reset();
}

};


});