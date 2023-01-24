let fields = document.querySelectorAll(".fields");
let root = document.querySelector(":root");

fields.forEach((square => {
    square.addEventListener("click", action);
}))

function action(e) {

    let square = e.target;
    let pos = square.id;  /* position */

    turnAction(pos);
    updateBoard();
}

function updateBoard() {
    let fields = document.querySelectorAll(".fields");

    fields.forEach((square => {
        let pos = square.id;
        let sym = board[pos];

        if (sym != "") {
            square.innerHTML = "<div class=" + sym + "></div>";
        }
    }))
}
function gameStop(){
    root.style = "--color1: rgb(166, 150, 3); --color2: rgb(207, 194, 7); --color3: rgb(003, 074, 166); --color4:rgba(4, 132, 217, 0.521);"
}