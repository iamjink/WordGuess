$(document).ready(function() {

var songChoices = ['baby one more time', 'oops i did it again', 'crazy', 'stronger', 'work bitch', 'from the bottom of my broken heart', 'everytime', 'make me','piece of me', 'if you seek amy', 'womanizer', 'circus', 'i wanna go', 'hold it against me'];

var wins = 0;
var guessCountdown = 10;
var letterPressed = [];
var WordGuess = [];
var computerWord = songChoices[Math.floor(Math.random() * songChoices.length)].toUpperCase();
var GameEnd = false;

//reset function starts on web, this function is defined at the very bottom
reset();

//if key pressed is A-Z range, as stated in function isAlpha, then run letterMatch function upon keypress
document.onkeypress = function(event){
    if(isAlpha(event.key) && !GameEnd) {
        letterstoMatch(event.key.toUpperCase());
    };
}

//game function. check to see if letter is in compputerWord
function letterstoMatch(letter){
    letterMatch = false; 
    for (i=0, j=computerWord.length; i<j; i++) {
        if (letter === computerWord[i]) {
            WordGuess[i] = letter;
            letterMatch = true;

            if (WordGuess.join("")===computerWord) {
                wins++;
                GameEnd = true;
                reset();
            };
        };
    };

    if (!letterMatch) {
        if (!letterPressed.includes(letter)) {
            letterPressed.push(letter)
            guessCountdown--;
        }

        if (guessCountdown === 0) {
            letterPressed = computerWord.split()
            GameEnd = true;
            reset();
        }
    }

    updateText()

}

//reset game function everything to zero

function reset() {
    
    GameEnd = false;
    computerWord = songChoices[Math.floor(Math.random() * songChoices.length)].toUpperCase();
    //resetting words and letters
    letterPressed = [];
    WordGuess = [];
    guessCountdown = 10;
    
    console.log(computerWord);

    for(var i=0, j=computerWord.length; i<j; i++) {
        
        // if wordGuess (random computer word) has an empty space, then push space, if not, then use underscore
        if (computerWord[i]===" ") {
            WordGuess.push(" ")
        } else {
            WordGuess.push("_")
        }
    }

    updateText();
}

//check to see if key pressed by user is A-Z
function isAlpha(ch){
    return/^[A-Z]$/i.test(ch);
}

//function for updating text in browser in each category
function updateText() {
    document.querySelector("#winsNum").innerHTML = wins;
    document.querySelector("#currentWord").innerHTML = WordGuess.join("");
    document.querySelector("#guessCountdown").innerHTML = guessCountdown;
    document.querySelector("#userGuess").innerHTML = letterPressed.join("");

}

});
