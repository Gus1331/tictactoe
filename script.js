let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let all = [a1, a2, a3, b1, b2, b3, c1, c2,c3];

function gameStart(){
    all.forEach( (i) => {clearBoard(i)} );

    player1Turn();
}

function clearBoard(i){
    i.style.backgroundImage = "none"
}
