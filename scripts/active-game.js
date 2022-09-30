let gameOver = false;
let playerTurn;
const activePlayerElement = document.getElementById("active-player");

function checkForWinner(){

}

function setBlockValue(event) {
  const block = event.target;
  block.classList.add('disable-block');

  if (block.textContent || gameOver) {
    //return if clicked on previously selected block or game over.
    return;
  }

  gameData[block.dataset.row][block.dataset.col] = playerTurn;
  console.log(gameData);
  if (playerTurn === 1) {
    //set x and o values to the blocks depeneding on player's turn
    block.textContent = "X";
    playerTurn = 2;
    activePlayerElement.textContent = player2Name;
  } else {
    block.textContent = "O";
    playerTurn = 1;
    activePlayerElement.textContent = player1Name;
  }
}

function startGame(event) {
  activePlayerElement.textContent = player1Name; //set active player text

  gameAreaElement.style.display = "initial";
  playerTurn = 1;

  for (block of gameBlocksElements) {
    //reset the game
    block.textContent = null;
    block.classList.remove("disable-block");
    block.addEventListener("click", setBlockValue);
  }
}
