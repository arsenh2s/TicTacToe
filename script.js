
let gameName = document.querySelector(".gameName")
let startBtn = document.querySelector(".btnStart")
let area = document.querySelector(".area")
let game = document.querySelector(".game")
let winnerShow = document.querySelector(".winner")
let winnerShowH2 = document.querySelector(".winner h2 span")
let TTT = document.querySelector(".ttt")
let boardArea = 3
let gameEnd = 0
let winnerCountXDiag = 0
let winnerCountODiag = 0
let j = 0
let f = boardArea
let board = []
let sells = []
let turn = 0

let sellValue = [

]

function startGame() {
    area.style.display = "none"
    TTT.style.display = "block"
    TTT.style.left = '50%';
    TTT.style.transform = "translate(-50%, -50%)"
    // let boardArea = +document.querySelector(".inputcell").value
    let boardArea = 3
    console.log(+document.querySelector(".inputcell").value);

    for (let i = 0; i < boardArea ** 2; i++) {
        let sell = document.createElement("div")
        game.appendChild(sell)
        sells[i] = sell
        sells[i].classList.add("sell")
        sells[i].style.width = 600 / boardArea + "px"
        sells[i].style.height = 600 / boardArea + "px"
    }
    for (let l = 0; l < sells.length / boardArea; l++) {
        board.push([])
        for (let j = 0; j < boardArea; j++) {
            board[l].push("")
        }
    }
    gameAnimation()

}






function gameAnimation() {
    checkWinner()
    for (let i in sells) {
        sells[i].onclick = () => {
            if (turn == 0) {
                if (sells[i].innerHTML == "" && gameEnd == 0) {
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
    if (turn == 1 && isFull == 0 && gameEnd == 0) {
        setTimeout(() => {
            if (gameEnd == 0) {
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
                O.innerHTML = "O"

                for (let i in sells) {
                    if (sells[i].innerText == "O") {
                        board[Math.floor(i / boardArea)][i % boardArea] = "O"
                    }
                }
            }
        }, 300)
        turn = 0
    }
    if (gameEnd == 0) requestAnimationFrame(gameAnimation)
}





function checkWinner() {

    for (let i in board) {
        let winnerCountX = 0
        let winnerCountO = 0
        for (let j = boardArea - 1; j >= 0; j--) {
            if (board[i][j] == "X") {
                winnerCountX++
            }
            if (board[i][j] == "O") {
                winnerCountO++
            }
            if (winnerCountX == boardArea) {
                gameEnd = 1
                winnerShow.style.display = "block"
                winnerShow.style.opacity = "1"

                winnerShowH2.innerHTML = "X"
            }
            if (winnerCountO == boardArea) {
                gameEnd = 1
                winnerShow.style.display = "block"
                winnerShow.style.opacity = "1"
                winnerShowH2.innerHTML = "O"
            }
        }
    }
    for (let i in board) {
        let winnerCountX = 0
        let winnerCountO = 0
        for (let j = boardArea - 1; j >= 0; j--) {
            if (board[j][i] == "X") {
                winnerCountX++
            }
            if (board[j][i] == "O") {
                winnerCountO++
            }
            if (winnerCountX == boardArea) {
                gameEnd = 1
                winnerShow.style.display = "block"
                winnerShow.style.opacity = "1"
                winnerShowH2.innerHTML = "X"

            }
            if (winnerCountO == boardArea) {
                gameEnd = 1
                winnerShow.style.display = "block"
                winnerShow.style.opacity = "1"
                winnerShowH2.innerHTML = "O"
            }
        }
    }

    for (let i in board) {
        if (board[i][j] == "X") {
            winnerCountXDiag++
        }
        else winnerCountXDiag = 0
        if (board[i][j] == "O") {
            winnerCountODiag++
        }
        else winnerCountODiag = 0
        if (winnerCountXDiag == boardArea) {
            gameEnd = 1
            winnerShow.style.display = "block"
            winnerShow.style.opacity = "1"

            winnerShowH2.innerHTML = "X"
        }
        if (winnerCountODiag == boardArea) {
            gameEnd = 1
            winnerShow.style.display = "block"
            winnerShow.style.opacity = "1"
            winnerShowH2.innerHTML = "O"
        }
        j++
        if (j == boardArea) j = 0

    }
    for (let i in board) {
        if (board[i][f] == "X") {
            winnerCountXDiag++
        }
        else winnerCountXDiag = 0
        if (board[i][f] == "O") {
            winnerCountODiag++
        }
        else winnerCountODiag = 0
        if (winnerCountXDiag == boardArea) {
            gameEnd = 1
            winnerShow.style.display = "block"
            winnerShow.style.opacity = "1"

            winnerShowH2.innerHTML = "X"
        }
        if (winnerCountODiag == boardArea) {
            gameEnd = 1
            winnerShow.style.display = "block"
            winnerShow.style.opacity = "1"
            winnerShowH2.innerHTML = "O"
        }
        f--
        if (f < 0) f = boardArea

    }
}
