//edit player info
let playerToEdit;
const errorsOutputElement = document.getElementById("error-msg");
const player1Name = document.getElementById("player1-name").textContent;
const player2Name = document.getElementById("player2-name").textContent;
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const player1Btn = document.getElementById("player1-edit-btn");
player1Btn.addEventListener("click", editPlayerInfo);
const player2Btn = document.getElementById("player2-edit-btn");
player2Btn.addEventListener("click", editPlayerInfo);

const exitEditorBtn = document.getElementById("cancel");
exitEditorBtn.addEventListener("click", exitPlayerEditor);

const playerInfoForm = document.querySelector("form");
playerInfoForm.addEventListener("submit", confirmPlayerInfo);

//active game info
const gameAreaElement = document.getElementById("game");
const gameBlocksElements = document.querySelectorAll("#game li");

const newGameBtnElement = document.getElementById("new-game-btn");
newGameBtnElement.addEventListener("click", startGame);
