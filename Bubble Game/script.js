var timer = 60;
var Score = 0;
var hitRn = 0;

function makeBubble() {
  var clutter = " ";
  for (var i = 1; i <= 135; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over , Your Final Score is  ${Score} </h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitRn;
}

function incScore() {
  Score += 10;
  document.querySelector("#scoreVal").textContent = Score;
}

document.querySelector("#pbtm").addEventListener("click", (details) => {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === hitRn) {
    incScore();
    getNewHit();
    makeBubble();
  }
});

runTimer();
makeBubble();
getNewHit();
