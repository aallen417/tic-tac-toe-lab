/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board = [
    "", "", "",
    "", "", "",
    "", "", ""
]
let turn = "X"
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr")
messageEl = document.querySelector("#message")

/*-------------------------------- Functions --------------------------------*/

const render = () => {

}
const updateBoard = () => {
    board.forEach((square, index) => {
        squareEls[index]
    })
}
const init = () => {
    render()
}

init()

/*----------------------------- Event Listeners -----------------------------*/



