// Iteration 1: Declare variables required for this game
const body = document.getElementById("game-body");
let zombie_id = 1;



// Iteration 1.2: Add shotgun sound
let shotgun = new Audio("assets/shotgun.wav");

body.onclick = () => {
  shotgun.pause();
  shotgun.currentTime = 0;
  shotgun.play();
};

// Iteration 1.3: Add background sound
let bgm = new Audio("assets/bgm.mp3");

bgm.play();
bgm.loop = true;

// Iteration 1.4: Add lives
let lives = 4;

// Iteration 2: Write a function to make a zombie
function makezombie() {
  body.innerHTML += `<img src='assets/zombie-${randomnum(
    1,
    6
  )}.png' class='zombie-image' id='zombie${zombie_id}'/>`;
  let currentzombie = document.querySelector(`#zombie${zombie_id}`);
  currentzombie.style.transform = `translateX(${randomnum(20, 80)}vw)`;
  currentzombie.onclick = () => {
    destroy(currentzombie);
  };


}




// Iteration 3: Write a function to check if the player missed a zombie
function checkzombie(currentzombie) {
  console.log(lives)
  // let currentzombie = document.querySelector(`#zombie${zombie_id}`);

    if (currentzombie.getBoundingClientRect().top <= 0) {

      return true


  }
  return false
}


// Iteration 4: Write a function to destroy a zombie when it is shot or missed
// const zombieimage=document.querySelector('.zombie-image')

function destroy(zombie) {
  zombie.style.display = "none";
  zombie_id++;
  makezombie();
}


// Iteration 5: Creating timer

var timeLeft = 60;

timer.innerText = timeLeft; 
setInterval(() => {
    const timer = document.getElementById("timer");
    timeLeft=timeLeft-1;
    timer.innerText = `${timeLeft}`;
    let currentzombie = document.querySelector(`#zombie${zombie_id}`);
    if (checkzombie(currentzombie)==true){
      lives--;
      destroy(currentzombie);
    }
    if (timeLeft == 0) {
      window.location.href = "win.html";
    }
    if (lives == 0) {
      location.href = "game-over.html";
    }

}, 1000);


// Iteration 6: Write a code to start the game by calling the first zombie
makezombie()

// Iteration 7: Write the helper function to get random integer

function randomnum(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}
