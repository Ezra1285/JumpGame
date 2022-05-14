var character = document.getElementById("character");
document.addEventListener("click", jump);
var block = document.getElementById("block");

function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop >= 130) {
        console.log("Death");
        alert("Game over");
    }
}
setInterval(checkDead, 10); // Check for death every 10 milliseconds

function jump() {
    if(character.classList == "animate"){return;}  // First, check if the user is already jumping

    character.classList.add("animate");
    setTimeout(removeJump, 300) // 300ms = length of animation

};
function removeJump(){
    character.classList.remove("animate");
}