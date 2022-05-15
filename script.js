var character = document.getElementById("character");
var block = document.getElementById("block");
document.addEventListener("click", jump);
var isGamePlaying = 0; // 0 for when the game if off and 1 when the game is on.
var totalScore = 0;
var highScoreList = [];

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
    totalScore = 0;
    alert("Game over");
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
  let isScoreCountedAlready = false;
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

  //  Add each element(score) to the array
  tableElements.querySelectorAll(".score").forEach((el) => scoreList.push(el));

  //  Clear our table or the previous scores
  for (let i = 0; i < scoreList.length; i++) {
    console.log("Beep" + scoreList[i].innerHTML);
  }
  //  Sort the array for to reinsert it into the table
  let sortedScoreList = scoreList.sort(function (a, b) {
    console.log("Testing:" + parseInt(a, 10) + parseInt(b, 10));
    return a - b;
  });

  for (let i = 0; i < sortedScoreList.length; i++) {
    console.log(sortedScoreList[i]);
    console.log("Test");
  }
  //  Re-add elements to the table
  // sortedScoreList.forEach((e) => tableElements.appendChild(e));
  let myTable = document.getElementById("leaderBoard").rows;
  for (let i = 1; i < 4; i++) {
    let y = myTable[i].cells;
    y[1].innerHTML = highScoreList[i];
  }
}
