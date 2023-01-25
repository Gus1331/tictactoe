let fields = document.querySelectorAll(".fields");
let root = document.querySelector(":root");
let restart = document.getElementById("restart");
let h1 = document.getElementsByTagName("h1")[0];
let screen = document.getElementById("board");


 /*  event listeners */ 

restart.addEventListener("click", reset);
fields.forEach((square => {
    square.addEventListener("click", action);
}))


function action(e) { /* takes the clicked square */
    let square = e.target;

    turnAction(square.id); /* send the position */
    updateBoard();
}

function updateBoard() { /* Update the board with the new moves */

    fields.forEach((square => {
        let pos = square.id; /* position */
        let sym = board[pos]; /* symbol */

        if (sym != "") {
            square.innerHTML = "<div class=" + sym + "></div>";
        }
    }))
}
function gameStop(){ /* Stop and finish the game */
    root.style = "--color1: rgb(166, 150, 3); --color2: rgb(207, 194, 7); --color3: rgb(003, 074, 166); --color4:rgba(4, 132, 217, 0.521);";
    h1.style.backgroundColor = "var(--color3)";
    h1.innerHTML = "<span>Player " + (player+1) + " Wins!</span>"
}

function reset(){
    location.reload()
}