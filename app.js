const board = document.getElementById("board");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      setTimeout(() => alert(`${gameBoard[a]} yutdi!`), 100);
      return true;
    }
  }
  if (!gameBoard.includes("")) {
    setTimeout(() => alert("Durrang!"), 100);
    return true;
  }
  return false;
}

function handleClick(index, cell) {
  if (!gameBoard[index]) {
    gameBoard[index] = currentPlayer;
    cell.innerHTML =
      currentPlayer === "X"
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-o"></i>';
    if (!checkWinner()) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    } else {
      setTimeout(() => location.reload(), 1000);
    }
  }
}

for (let i = 0; i < 9; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", () => handleClick(i, cell));
  board.appendChild(cell);
}
