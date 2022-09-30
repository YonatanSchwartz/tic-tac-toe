const DRAW = 3;
let gameOver;
let playerTurn;
const activePlayerElement = document.getElementById("active-player");

function checkForWinner() {
  for (let i = 0; i < 3; i++) {
    //check for winner via rows.
    if (
      gameData[i][0] != 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
    //check for winner via columns.
    if (
      gameData[0][i] != 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //check for winner in diagonals.
  if (
    gameData[0][0] != 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] != 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  //handle draw.
  if (roundNumber == 9) {
    return DRAW;
  }

  return null;
}

function nextTurn() {
  //set x and o values to the blocks depeneding on player's turn.
  if (playerTurn === 0) {
    playerTurn = 1;
    return;
  }
  playerTurn = 0;
}

function endGame(winner) {
  winnerInfoElement.style.display = "block";
  activePlayerElement.parentElement.style.removeProperty("display"); //remove turn.

  if (winner === DRAW) {
    winnerInfoElement.firstElementChild.textContent = "It's a draw!";
    return;
  }
  document.getElementById("winner").textContent =
    playersData[winner - 1].username; //set winner name on winner info element.
  return;
}

function setBlockValue(event) {
  const block = event.target;

  //return if clicked on previously selected block or game over.
  if (block.textContent || gameOver) {
    return;
  }

  block.classList.add("disable-block");

  //set value depending on player.
  gameData[block.dataset.row][block.dataset.col] = playerTurn + 1;
  block.textContent = playersData[playerTurn].symbol;

  let winner = checkForWinner();
  //handle game over.
  if (winner) {
    gameOver = true;
    endGame(winner);
  }

  //start next round
  roundNumber++;
  nextTurn();
  activePlayerElement.textContent = playersData[playerTurn].username;
}

function resetGameDataArr() {
  for (let i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      gameData[i][j] = 0;
    }
  }
}

function resetBoard() {
  winnerInfoElement.style.removeProperty("display");

  for (block of gameBlocksElements) {
    block.textContent = null;
    block.classList.remove("disable-block");
  }
  resetGameDataArr();
}

function startGame(event) {
  activePlayerElement.textContent = playersData[0].username; //set active player text
  gameAreaElement.style.display = "initial";

  gameOver = false;

  //if not the firsdt iteration of the game, reset board.
  if (roundNumber != 1) {
    resetBoard();
  } else {
    //if first iteration add event listeners.
    for (block of gameBlocksElements) {
      block.addEventListener("click", setBlockValue);
    }
  }

  activePlayerElement.parentElement.style.display = "block";
  roundNumber = 1;
  playerTurn = 0;
}
