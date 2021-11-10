/* Array of objects -> each object has a word and its hint
// var wordsArray = [
//     [{word: "asteroid",
//      hint: "a small rocky body orbiting the sun" },
//     {word: "constellation",
//      hint: "a group of stars that form a pattern in the sky"},
//     {word: "nebula",
//      hint: "a giant cloud of dust and gas in space"},
//     {word: "telescope",
//      hint: "instrument used to view distant objects in space"},
//     {word: "satellite",
//      hint: "an object in orbit"},      
//     {word: "galaxy",
//      hint: "a system of stars and planets"}]
*/

// Array of words
const words = ["ASTEROID", "GALAXY", "NEBULA", "TELESCOPE", "SATELLITE", "CONSTELLATION", "METEOR", "GRAVITY", "PLANET", "INTERSTELLAR",]
randomWord = words[Math.floor(Math.random() * words.length)]; //expression to pick random word from array
const word = randomWord
var guessedLetters = [];
console.log(word)


var ufo = document.querySelector(".ufo")
var spaceman = document.querySelector(".spaceman")
var spacesContainer = document.querySelector(".spacesContainer")
var letter = ""
var letterClicked = ""
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 
                'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X',
                'Y', 'Z']

// Display alphabet buttons
var displayAlphabet = () => {
    alphabetContainer = document.getElementById("alphabetContainer")
    lettersList = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) {
      lettersList.id = 'alphabet';
      letter = document.createElement('li');
      letter.id = alphabet[i];
      letter.setAttribute("class", "letter")
      letter.innerHTML = alphabet[i];
      alphabetContainer.appendChild(lettersList);
      lettersList.appendChild(letter);
    }      
}

// Go through all the letters of the word and if a letter has not been guessed, there is an underscore
var getWordStatus = () => {
    var wordStatus  = [];
    var splitWord = word.split("");
  
    splitWord.forEach(function (letter) {
      if (guessedLetters.indexOf(letter) > -1) {
        wordStatus.push(letter);
        console.log(wordStatus)
      } else {
        wordStatus.push("_");
      }
    });
  
    return wordStatus;
  };

// Console logs letter when clicked and returns true if 'word' contains letter clicked
var guess = () => {
    document.querySelectorAll(".letter").forEach(element => {
        element.addEventListener('click', event => {
            letterClicked = (element.innerText)
            console.log(letterClicked)

            if(word.includes(letterClicked)){ // Conditional 
                console.log("true")
                if (guessedLetters.indexOf(letterClicked) > -1) { // check if letter has already been clicked
                    return;
                }
                guessedLetters.push(letterClicked)
                console.log(guessedLetters)
                displayWord();
                hideButton(letterClicked);
                return true;
            }
            
            else{
                console.log("false")
                subtractGuess() // subtract guess
                hideButton(letterClicked)
                return false;
            }
        })
     })
 }

 var resetSpaces = function () {
    var word = document.getElementById("currentWord");
    while (word.firstChild) {
      word.removeChild(word.firstChild);
    }
  };

 // Display word AND spaces
 var displayWord = (word) => {
    resetSpaces();
    var currentWordDOM = document.querySelector('#currentWord')
    var currentWord = getWordStatus();
     currentWord.forEach(function (letterClicked) {
         letterContainer = document.querySelector(".letterContainer")
         var spanLetter = document.createElement("span")
         var content = document.createTextNode(letterClicked);

         spanLetter.appendChild(content)
         currentWordDOM.appendChild(spanLetter)
     })
 }

// Subtract 1 guess everytime player chooses wrong letter
var subtractGuess = () => {
     var num = document.querySelector(".guessesLeft").innerText
     var newNum = parseInt(num);
     newNum = (newNum -1)
    document.querySelector(".guessesLeft").innerText = newNum;
    if (newNum == 0){
        displayGameOver()
    }
}

// Display game over message
var displayGameOver = () => {
    console.log("game over")
    gameOverContainer = document.querySelector(".gameover")
    var gameOver = document.createElement("h1");
    var subHeader = document.createElement("p")
    gameOver.innerText = "GAME OVER"
    subHeader.innerText = "The astronaut was abducted :("
    gameOverContainer.appendChild(gameOver)
    gameOverContainer.appendChild(subHeader)
    spaceman.style.display = ("none")
}

// Display game won message
var displayGameWon = () => {
    console.log("game won")
    gameOverContainer = document.querySelector(".gameover")
    var gameOver = document.createElement("h1");
    var subHeader = document.createElement("p")
    gameOver.innerText = "GAME OVER"
    subHeader.innerText = "The astronaut was abducted :("
    gameOverContainer.appendChild(gameOver)
    gameOverContainer.appendChild(subHeader)
    spaceman.style.display = ("none")
}

// Restart game when button pressed
var restart = () => {
    var restartButton = document.querySelector(".restart")
    restartButton.addEventListener("click", event => {
        console.log("restart button test success")
        location.reload();
    })

}

// Change button styling to show it has been clicked
var hideButton = (letterClicked) => {
    var id = letterClicked;
    var letterButton = document.querySelector(`#${id}`)
    letterButton.style.borderColor = "#C5C5C5"
    letterButton.style.color = "#C5C5C5"                                                                   
}

displayWord()
displayAlphabet()
guess()
restart()




