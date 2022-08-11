//defining variables
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

// ever click change inner HTML and run the computer choice function
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);
// function for computers choice at random out of the possbile choices
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // 3 choices, +1 is so starts at 1 not 0
  // if statements to define which each choice equals from random number generated
  if (randomNumber === 1) {
    computerChoice = "Scissors";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else if (randomNumber === 3) {
    computerChoice = "Rock";
  } else if (randomNumber === 4) {
    computerChoice = "Lizard";
  } else if (randomNumber === 5) {
    computerChoice = "Spock";
  }
  // adds html of computers choice from its random generated choice
  computerChoiceDisplay.innerHTML = computerChoice;
}

// function to output the winner into result by comparing what choices equal to
function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw!";
    // computer wins
  } else if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "Scissors cuts Paper, you lose!";
  } else if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "Paper cover Rock, you lose!";
  } else if (computerChoice === "Rock" && userChoice === "Lizard") {
    result = "Rock crushes Lizard, you lose!";
  } else if (computerChoice === "Lizard" && userChoice === "Spock") {
    result = "Lizard Poisons Spock, you lose!";
  } else if (computerChoice === "Spock" && userChoice === "Scissors") {
    result = "Spock smashes Scissors, you lose!";
  } else if (computerChoice === "Scissors" && userChoice === "Lizard") {
    result = "Scissors decapitates Lizard, you lose!";
  } else if (computerChoice === "Lizard" && userChoice === "Paper") {
    result = "Lizard eats Paper, you lose!";
  } else if (computerChoice === "Paper" && userChoice === "Spock") {
    result = "Paper disproves Spock, you lose!";
  } else if (computerChoice === "Spock" && userChoice === "Rock") {
    result = "Spock vaporises Rock, you lose!";
  } else if (computerChoice === "Rock" && userChoice === "scissors") {
    result = "Rock crushes Scissors, you lose!";
  } // players wins
  else if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "Scissors cuts Paper, you win!";
  } else if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "Paper cover Rock, you win!";
  } else if (computerChoice === "Lizard" && userChoice === "Rock") {
    result = "Rock crushes Lizard, you win!";
  } else if (computerChoice === "Spock" && userChoice === "Lizard") {
    result = "Lizard Poisons Spock, you win!";
  } else if (computerChoice === "Scissors" && userChoice === "Spock") {
    result = "Spock smashes Scissors, you win!";
  } else if (computerChoice === "Lizard" && userChoice === "Scissors") {
    result = "Scissors decapitates Lizard, you win!";
  } else if (computerChoice === "Paper" && userChoice === "Lizard") {
    result = "Lizard eats Paper, you win!";
  } else if (computerChoice === "Spock" && userChoice === "Paper") {
    result = "Paper disproves Spock, you win!";
  } else if (computerChoice === "Rock" && userChoice === "Spock") {
    result = "Spock vaporises Rock, you win!";
  } else if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "Rock crushes Scissors, you win!";
  }
  resultDisplay.innerHTML = result;
}
