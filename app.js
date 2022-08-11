const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

// ever click change inner HTML and run the computer choice function
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
  })
);
// function for computers choice at random out of the possbile choices
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // 3 choices, +1 is so starts at 1 not 0
  // if statements to define which each choice equals from random number generated
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  // adds html of computers choice from its random generated choice
  computerChoiceDisplay.innerHTML = computerChoice;
}
// time in: 9 mins
