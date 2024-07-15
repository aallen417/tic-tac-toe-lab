/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board 
let turn 
let winner
let tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr")
messageEl = document.getElementById("message")


/*-------------------------------- Functions --------------------------------*/

const init = () => {
    board = ["","","","","","","","",""]
    turn = "X"
    winner = false
    tie = false
    render()
}

const render = () => {


}

/*----------------------------- Event Listeners -----------------------------*/



