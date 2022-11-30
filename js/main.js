//selecting elements
const userScoreDisplay = document.getElementById("userScoreVal");
const compScoreDisplay = document.getElementById("compScoreVal");
const rockPic = document.getElementById("r");
const paperPic = document.getElementById("p");
const scissorsPic = document.getElementById("s");

//important variables
let highestScore = 5;
const elements = ["rock", "paper", "scissors"];

//computer display
const computerSelection = (elements) => {
  const randomIndex = Math.floor(Math.random() * 3);
  console.log(randomIndex, elements[randomIndex]);
  return elements[randomIndex];
};
let userScore = 0;
let compScore = 0;
//userSelection
rockPic.addEventListener("click", function () {
  const computerElement = computerSelection(elements);
  if (userScore < highestScore && compScore < highestScore) {
    if (computerElement === "paper") {
      compScore = compScore + 1;
      compScoreDisplay.textContent = compScore;
      console.log(`Userscore: ${userScore}, CompScore: ${compScore}`);
    } else if (computerElement === "scissors") {
      userScore = userScore + 1;
      userScoreDisplay.textContent = userScore;
      console.log(`Userscore: ${userScore}, CompScore: ${compScore}`);
    } else if (computerElement === "rock") {
      compScoreDisplay.textContent = compScore;
      userScoreDisplay.textContent = userScore;
      console.log(`Userscore: ${userScore}, CompScore: ${compScore}`);
    }
  }
  else{
    compScoreDisplay.textContent = compScore;
    userScoreDisplay.textContent = userScore;
    winnerMessage(userScore, compScore);
  }
});

scissorsPic.addEventListener("click", function () {
  const computerElement = computerSelection(elements);
  if (userScore < highestScore && compScore < highestScore) {
    if (computerElement === "rock") {
      compScore = compScore + 1;
      compScoreDisplay.textContent = compScore;
      console.log(`Userscore: ${userScore}, CompScore: ${compScore}`);
    } else if (computerElement === "paper") {
      userScore = userScore + 1;
      userScoreDisplay.textContent = userScore;
      console.log(`Userscore: ${userScore}, CompScore: ${compScore}`);
    } else if (computerElement === "scissors") {
      compScoreDisplay.textContent = compScore;
      userScoreDisplay.textContent = userScore;
      console.log(`Userscore: ${userScore}, CompScore: ${compScore}`);
    }
  } else {
    compScoreDisplay.textContent = compScore;
    userScoreDisplay.textContent = userScore;
    winnerMessage(userScore, compScore);
  }
});

paperPic.addEventListener('click',function(){
    const computerElement = computerSelection(elements);
  if (userScore < highestScore && compScore < highestScore) {
    if (computerElement === "scissors") {
      compScore = compScore + 1;
      compScoreDisplay.textContent = compScore;
      console.log(`Userscore: ${userScore}, CompScore: ${compScore}`);
    } else if (computerElement === "rock") {
      userScore = userScore + 1;
      userScoreDisplay.textContent = userScore;
      console.log(`Userscore: ${userScore}, CompScore: ${compScore}`);
    } else if (computerElement === "paper") {
      compScoreDisplay.textContent = compScore;
      userScoreDisplay.textContent = userScore;
      console.log(`Userscore: ${userScore}, CompScore: ${compScore}`);
    }
  } else {
    compScoreDisplay.textContent = compScore;
    userScoreDisplay.textContent = userScore;
    winnerMessage(userScore, compScore);
  }
})


//displays the winner message
function winnerMessage(userScore, compScore) {
  if (userScore === 5) {
    compScoreDisplay.textContent = compScore;
    userScoreDisplay.textContent = userScore;
    alert(`User wins with score of: ${userScore} 🎉🎉. Play again `);
  } else if (compScore === 5) {
    compScoreDisplay.textContent = compScore;
    userScoreDisplay.textContent = userScore;
    alert(`Computer wins with a score of ${compScore} 🎉🎉. Play again `);
  }
  resetScores();
}

//resets the scores
function resetScores() {
  userScore = 0;
  compScore = 0;
  compScoreDisplay.textContent = compScore;
  userScoreDisplay.textContent = userScore;
}
