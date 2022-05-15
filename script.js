var character = document.getElementById("character");
var block = document.getElementById("block");
document.addEventListener("click", jump);
var isGamePlaying = 0; // 0 for when the game if off and 1 when the game is on.

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
