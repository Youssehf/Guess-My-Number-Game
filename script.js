//define the secret number between 1 and 20 and store it in a variable
let theSecertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNum = function (num) {
  document.querySelector(".numberSpn").textContent = num;
};

const displayScore = function (sc) {
  document.querySelector(".score").textContent = sc;
};

const displayBgColor = function (clr) {
  document.querySelector("body").style.backgroundColor = clr;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  
  if (!guess) {
    displayMessage("⛔️ No Number!");
  } else if (guess === theSecertNumber) {
    displayMessage("🎉 Correct Number! 🎉");
    displayNum(theSecertNumber);
    displayBgColor("#60b374");
    document.querySelector(".numberParent").style.width = "30rem";

    // Check if guessed on the first try
    if (score === 20) {
      highscore = score + 5; // Set highscore to current score + 5
      document.querySelector(".highscore").textContent = highscore;
    } else if (score > highscore) {
      highscore = score; // Update highscore if current score is higher
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== theSecertNumber) {
    if (score > 1) {
      displayMessage(guess > theSecertNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
      displayBgColor("#ff0000");
    }
  }
});

// Reset logic remains unchanged
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  theSecertNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayNum("?");
  displayScore(20);
  displayBgColor("#222");
  document.querySelector(".numberParent").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
