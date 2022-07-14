let gameName = document.querySelector(".gameName")
let startBtn = document.querySelector(".btnStart")
let area = document.querySelector(".area")
let game = document.querySelector(".game")
let boardArea = 3






let sells = []
for (let i = 0; i < boardArea ** 2; i++) {
    let sell = document.createElement("div")
    game.appendChild(sell)
    sells[i] = sell
    sells[i].classList.add("sell")
}
let board = []
for (let l = 0; l < sells.length / boardArea; l++) {
    board.push([])
    for (let j = 0; j < boardArea; j++) {
        board[l].push("")
    }
}
console.log(board);

console.log(1 % 3);

let turn = 0
function gameAnimation() {
    for (let i in sells) {
        sells[i].onclick = () => {
            if (turn == 0) {
                if (sells[i].innerHTML == "") {
                    let x = document.createElement("div")
                    sells[i].appendChild(x)
                    x.classList.add("X")
                    x.innerHTML = "X"
                    turn = 1
                    board[Math.floor(i / boardArea)][i % boardArea] = "X"

                }
            }
        }
    }
    let fullSells = 0
    let isFull = 0

    for (let j in sells) {
        if (sells[j].innerHTML != "") {
            fullSells++
        }
        if (fullSells == sells.length) {
            isFull = 1

        }
    }
    if (turn == 1 && isFull == 0) {


        // setTimeout(() => {
        // if(turn == 1){
        let sellsClear = []
        for (let j in sells) {
            if (sells[j].innerHTML == "") {
                sellsClear.push(sells[j])
            }
        }
        let i = Math.floor(Math.random() * sellsClear.length)

        let O = document.createElement("div")
        sellsClear[i].appendChild(O)
        O.classList.add("O")
        O.innerHTML = "o"
      console.log(sells);
      
        for (let i in sells) {
            console.log(i);
            
            console.log(sells[i].innerText);
            
            if (sells[i].innerHTML == "o") {
                console.log(2);
                // board[Math.floor(i / boardArea)][i % boardArea] = "O"
            }
        }
        // }
        // }, 500)
        turn = 0
    }
    checkWinner()
    requestAnimationFrame(gameAnimation)
}
gameAnimation()



function startGame() {
    area.style.display = "none"
}


function checkWinner() {
    for (let i in board) {
        let winnerCount = 0
        for (let j = boardArea - 1; j >= 0; j--) {
            if (board[i][j] == "X") {
                winnerCount++
            }
            if (winnerCount == boardArea) {
                console.log("X is the winner");

            }
        }
    }
}