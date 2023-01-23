let board = ["", "", "", "", "", "", "", "", ""];
let player = 0;
let symbol = ["x", "o"]

function turnAction(pos) {

    if (board[pos] == "") {
        
        board[pos] = symbol[player];

        if (player == 0) {
            player = 1;
        }
        else {
            player = 0;
        }
    }
}