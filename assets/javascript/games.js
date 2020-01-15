//jquery document.ready 

// $(document).ready(function() {

var songChoices = ['baby one more time', 'oops! i did it again', 'crazy', 'stronger', 'work bitch!', 'from the bottom of my broken heart', 'everytime', 'make me','piece of me', 'if you seek amy', 'womanizer', 'circus', 'i wanna go', '3', 'hold it against me', 'scream & shout'];

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
        letterMatch(event.key.toUpperCase());
    };
}

//game function. check to see if letter is in compputerWord
function letterMatch(letter){
    letterMatch = false; 
    for (i=0, j=computerWord.length; i<j; i++) {
        if (letter === computerWord[i]) {
            WordGuess[i] = letter;
            letterMatch = true;

            if (WordGuess.join("")===computerWord) {
                wins++;
                GameEnd = true;
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
        }
    }

    updateText()

}

//reset game function

function reset() {
    GameEnd = false;

    //resetting words and letters
    letterPressed = [];
    WordGuess = [];

    for(i=0, j=computerWord.length; i<j; i++) {
        if (computerWord[i]==="") {
            letterPressed.push("")
        } else {
            letterPressed.push("_")
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
    document.querySelector("winsNum").innerText = wins;
    document.querySelector("currentWord").innerText = WordGuess.join("");
    document.querySelector("guessCountdown").innerText = guessCountdown;
    document.querySelector("userGuess").innerText = letterPressed.join("");

}

// });
