let fields = document.querySelectorAll(".fields");

fields.forEach((square => {
    square.addEventListener("click", action);
}))

function action(e) {
    console.log(e.target);

    let square = e.target;
    let pos = square.id;

    turnAction(pos);
    updateBoard();
}

function updateBoard() {
    let fields = document.querySelectorAll(".fields");

    fields.forEach((square => {
        let pos = square.id;
        let sym = board[pos];

        if(sym != ""){
            square.innerHTML = "<div class="+sym+"></div>"
        }
    }))
    }