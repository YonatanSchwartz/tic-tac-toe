function editPlayerInfo(event) {
  player = event.target.parentElement;
  document.querySelector("aside").style.display = "initial"; //show player editor.
  document.getElementById("backdrop").style.display = "initial"; //gray out background.
}

function exitPlayerEditor() {
  document.querySelector("aside").style.display = "none"; //exit player editor.
  document.getElementById("backdrop").style.display = "none"; //remove gray out background.

  playerInfoForm.firstElementChild.classList.remove('error');
  document.getElementById('playername').value = null;
  errorsOutputElement.textContent = null;
}

function confirmPlayerInfo(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); //set player name to user specified name.

  if (!enteredPlayerName) { //input error handling
    const inputContainer = event.target.firstElementChild;
    inputContainer.classList.add("error");

    errorsOutputElement.textContent = "Please enter a name.";
    return;
  }

  player.children[1].textContent = enteredPlayerName; //set player name
  exitPlayerEditor();
}
