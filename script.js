let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let selectedRow = -1;
let selectedCol = -1;
let players = "X";
let gameOver = false;

let display = document.getElementById("grid");
function playGame() {
  let html = "<table>";

  for (let i = 0; i < board.length; i++) {
    html += "<tr>";
    for (let j = 0; j < board[i].length; j++) {
        let cellClass = ""
        if(board[i][j] == ""){
            cellClass = ""
        }
      if (selectedRow == i && selectedCol == j) {
        html += `<td class="selected ${cellClass}" onclick = "cellClick(this, ${i}, ${j})">${board[i][j]}</td>`;
      } else {
        html += `<td class=" ${cellClass}"  onclick = "cellClick(this, ${i}, ${j})">${board[i][j]}</td>`;
      }
    }

    html += "</tr>";
  }
html += "</table>";
display.innerHTML = html;}

function cellClick(cell, row, col) {
    if(gameOver == true) return;
    if (board[row][col] === "") {
        board[row][col] = players;
        console.log(board)
       
        
        document.getElementById("turns").innerHTML = `player: ${players}`;
        
        playGame(players);

        if(checkWin(players) == true){
            document.getElementById("win").innerHTML = `player: ${players} Won`;
            gameOver = true
            return
        }

         players = (players === "X") ? "O" : "X";
    } else {
        document.getElementById("turns").innerHTML = "Cell already taken";
    }
}

function checkWin(players) {
    if (board[0][0] == players && board[0][1] == players && board[0][2] == players) {
        return true;
    }
    if (board[1][0] == players && board[1][1] == players && board[1][2] == players) {
        return true;
    }
    if (board[2][0] == players && board[2][1] == players && board[2][2] == players) {
        return true;
    }

    if (board[0][0] == players && board[1][0] == players && board[2][0] == players) {
        return true;
    }
    if (board[0][1] == players && board[1][1] == players && board[2][1] == players) {
        return true;
    }
    if (board[0][2] == players && board[1][2] == players && board[2][2] == players) {
        return true;
    }

    if (board[0][0] == players && board[1][1] == players && board[2][2] == players) {
        return true;
    }
    if (board[0][2] == players && board[1][1] == players && board[2][0] == players) {
        return true;
    }
    return false;
}
