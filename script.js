var character = document.getElementById("character");
var block = document.getElementById("block");
document.addEventListener("click", jump);
var isGamePlaying = 0; // 0 for when the game if off and 1 when the game is on.
var totalScore = 0;
var highScoreList = [];
var isScoreCountedAlready = false;

var startButton = document.getElementById("startButton");
startButton.onclick = function () {
  block.classList.add("startGame");
  isGamePlaying += 2;
};

function checkDead() {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    console.log("Death");
    isGamePlaying = 0;
    block.classList.remove("startGame");
    console.log(totalScore);
    highScoreList.push(totalScore);
    alert("Game over\n" + "Score: " + totalScore);
    totalScore = 0;
  }
}

setInterval(checkDead, 10); // Check for death every 10 milliseconds

function jump() {
  //  Check if the click is for starting the game
  if (isGamePlaying == 2) {
    isGamePlaying--;
    return;
  }
  //  Check if the game is not in play
  if (isGamePlaying == 0) {
    return;
  }
  if (character.classList == "animate") {
    return;
  } // Check if the user is already jumping

  character.classList.add("animate");
  isScoreCountedAlready = false;
  setTimeout(removeJump, 300); // 300ms = length of animation
}
function removeJump() {
  character.classList.remove("animate");
}

/*
Counting the players score.
*/

//  Get blocks left position and check if it is passed
function countScore() {
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  if (
    blockLeft < 20 &&
    blockLeft > -20 &&
    characterTop < 130 &&
    isScoreCountedAlready == false
  ) {
    console.log("Score added");
    totalScore++;
    isScoreCountedAlready = true;
  }
}

setInterval(countScore, 50);

/*
Creating the leaderboard
*/

// document.addEventListener("click", () => {
function updateScoreBoard() {
  let scoreList = [];
  let tableElements = document.querySelector("#leaderBoard");
  let scoreElements = document.getElementsByClassName(".score");

  highScoreList.sort(function (a, b) {
    return a - b;
  });
  highScoreList.reverse();

  let myTable = document.getElementById("leaderBoard").rows;
  for (let i = 1; i < 4; i++) {
    let y = myTable[i].cells;
    if (typeof highScoreList[i - 1] == "undefined") {
      y[1].innerHTML = 0;
    } else {
      y[1].innerHTML = highScoreList[i - 1];
    }
  }
}
