//edit player info
let playerToEdit;
let roundNumber = 1;
const winnerInfoElement = document.getElementById('winner-info');
let playersData = [{username: 'PLAYER1', symbol: 'X'}, {username: 'PLAYER2', symbol: 'O'}];
const errorsOutputElement = document.getElementById("error-msg");

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
