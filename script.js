const statusDisplay = document.getElementById('status');
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton');


let currentPlayer = "X";
let gameState = ["","","","","","","","",""];
let gameActive = true;

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8], //Rows
    [0,3,6],
    [1,4,7],
    [2,5,8],//Columns
    [0,4,8],
    [2,4,6], //Diagonals

];

const winMessage = () => `Player ${currentPlayer} Wins!`;
const drawMessage = () => `It's a Draw! Good Game!`;
const currentPlayerMessage = () => `Player ${currentPlayer}'s Turn!`;


statusDisplay.textContent = currentPlayerMessage();

function handleCellUsed (clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
};

function handlePlayerChange() {
    currentPlayer = currentPlayer ==="X" ? "O": "X";
    statusDisplay.textContent = currentPlayerTurn();

}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const winningCondition = winConditions[i];
        const a =gameState[winningCondition[0]];
        const b =gameState[winningCondition[1]];
        const c =gameState[winningCondition[2]];

        if (a === '' || b === '' || c === ''){
            continue;
        }
        if (a === b && b === c){
            roundWon = true;
            break;
        }

    }

    if (roundWon){
        statusDisplay.textContent = winMessage();
        gameActive = false;
        return;
    }

    const roundDraw = !gameState.includes("");
    if (roundDraw){
        statusDisplay.textContent = drawMessage();
        gameActive = false;
        return;
    }

    //if both are false goes to handling player change
    handlePlayerChange();
}

function handleCellClick(event){
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }

    handleCellPlayed(clickedCell,clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame(){
    currentPlayer = "X";
    gameState = ["","","","","","","","","",];
}