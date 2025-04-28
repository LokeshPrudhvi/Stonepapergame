const rules = document.getElementById("rules");
const comscore = document.getElementById("compscore");
const userscore = document.getElementById("userscore");
const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorbtn = document.getElementById("scissors");
const userOption = document.getElementById("useroption");
const computerOption = document.getElementById("computeroption");
const playerSign = document.getElementById("playersign");
const computerSign = document.getElementById("computersign");
const winStatus = document.getElementById("winstatus");
const mainIndex = document.getElementById("mainindex");
const playMain = document.getElementById("playmain");
const nextButton = document.querySelector(".rulesbtn.next");
const fullgame = document.getElementById("fullgame");
const hurray = document.getElementById("hurray");

const boxshadow =
  "0 0 0 10px rgba(46, 154, 37, 0.7), 0 0 0 30px rgba(46, 154, 37, 0.45), 0 0 0 60px rgba(46, 154, 37, 0.39)";

let userScoreCount = parseInt(localStorage.getItem("userscore")) || 0;
let compScoreCount = parseInt(localStorage.getItem("compscore")) || 0;

userscore.innerText = userScoreCount;
comscore.innerText = compScoreCount;

const handSigns = ["rock", "paper", "scissor"];
const handImages = [
  "images/Rock.png",
  "images/paper.png",
  "images/scissor.png",
];
const handColors = [
  "rgba(0, 116, 182, 1)", // rock
  "rgba(189, 0, 255, 1)", // paper
  "rgba(255, 169, 67, 1)", // scissors
];

// User hand selection
rockbtn.onclick = () => pickHand(0);
paperbtn.onclick = () => pickHand(1);
scissorbtn.onclick = () => pickHand(2);

function pickHand(userSelect) {
  playerSign.src = handImages[userSelect];
  userOption.style.borderColor = handColors[userSelect];
  userOption.style.boxShadow = "";
  mainLogic(userSelect);
}

// Main Game Logic
function mainLogic(userSelect) {
  mainIndex.style.display = "none";
  playMain.style.display = "flex";

  const compSelect = Math.floor(Math.random() * 3);
  computerSign.src = handImages[compSelect];
  computerOption.style.borderColor = handColors[compSelect];

  if (userSelect === compSelect) {
    winStatus.innerText = "TIE";
  } else if (
    (userSelect === 0 && compSelect === 2) ||
    (userSelect === 1 && compSelect === 0) ||
    (userSelect === 2 && compSelect === 1)
  ) {
    userScoreCount++;
    userscore.innerText = userScoreCount;
    localStorage.setItem("userscore", userScoreCount);
    winStatus.innerText = "YOU WON";
    userOption.style.boxShadow = boxshadow;
    nextButton.style.display = "block";
  } else {
    compScoreCount++;
    comscore.innerText = compScoreCount;
    localStorage.setItem("compscore", compScoreCount);
    winStatus.innerText = "YOU LOST";
    computerOption.style.boxShadow = boxshadow;
  }
}

function playagain() {
  playMain.style.display = "none";
  mainIndex.style.display = "flex";
  userOption.style.boxShadow = "";
  computerOption.style.boxShadow = "";
  nextButton.style.display = "none";
  rules.style.display = "none";
}

function showrules() {
  rules.style.display = "block";
}
function hiderules() {
  rules.style.display = "none";
}
function nextbtn() {
  fullgame.style.display = "none";
  nextButton.style.display = "none";
  hurray.style.display = "flex";
}
function restart() {
    fullgame.style.display = "flex";
  nextButton.style.display = "flex";
  hurray.style.display = "none";
}
