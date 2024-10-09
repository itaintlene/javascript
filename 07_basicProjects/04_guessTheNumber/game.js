let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const prevGuesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const diff = document.querySelector('.lowOrHigh');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; // Array to store previous guesses
let numGuess = 1;   // Counter for the number of guesses
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 0 || guess > 100) {
    alert(`${guess} is not a valid number`);
  } else {
    prevGuess.push(guess); // Add the guess to the array
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`GAME OVER! <br> The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right! <br> CONGRATULATIONS!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`<h3>Number is too low <br> TRY AGAIN!</h3>`);
  } else if (guess > randomNumber) {
    displayMessage(`<h3>Number is too high <br> TRY AGAIN!</h3>`);
  }
}

function displayGuess(guess) {
  userInput.value = ''; // Clear the input field after each guess
  prevGuesses.innerHTML += `${guess} `; // Update the display of previous guesses
  numGuess++;
  remainingGuesses.innerHTML = `${10 - numGuess}`; // Update the number of remaining guesses
}

function displayMessage(message) {
  diff.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button'); // Display start button
  p.innerHTML = `<h4 id="newGame"><u>Start Game</u></h4>`;
  startover.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
    prevGuess = []; // Clear the previous guesses array
    numGuess = 1;   // Reset the guess counter
    prevGuesses.innerHTML = ''; // Clear the display of previous guesses
    remainingGuesses.innerHTML = `${10 - numGuess}`; // Reset the remaining guesses
    diff.innerHTML = ''; // Clear any message
    userInput.removeAttribute('disabled'); // Enable input
    startover.removeChild(p); // Remove the start game button
    playGame = true; // Set game to active
  });
}
