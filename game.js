/* VARIABLES */
let board = ["", "", "", "", "", "", "", "", "",];
let player = 0;
let symbol = ["x", "o"];
let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameOver = false;


function turnAction(pos) { /* Players Move and Win Check */
    if (gameOver == true) {
        return;
    }

    if (board[pos] == "") {
        board[pos] = symbol[player];
        gameOver = win();

        if (gameOver == false) {
            if (player == 0) {
                player = 1;
            }
            else {
                player = 0;
            }
        }
        return gameOver;
    }
}

function win() { /* Check win and Endgame */

    for (i = 0; i < winCondition.length; i++) {
        let seq = winCondition[i];  /* sequence */

        pos1 = seq[0];  /* position */
        pos2 = seq[1];
        pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != "") {
            gameStop();
            return true;
        }
    }

    return false;
}
