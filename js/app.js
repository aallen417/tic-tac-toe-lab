/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board = ["","","","","","","","",""]
let turn = "X"
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelector(".sqr")
const messageEl = document.querySelector("#message")

/*-------------------------------- Functions --------------------------------*/

const init = () => {
    render()
}

init()

/*----------------------------- Event Listeners -----------------------------*/



