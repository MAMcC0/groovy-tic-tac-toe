const statusDisplay = document.getElementById('status');
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton');

const scoreXElements = document.getElementById('scoreX');
const scoreOElements = document.getElementById('scoreO');
const scoreDrawElements = document.getElementById('scoreDraw');


let currentPlayer = "X";
let gameState = ["","","","","","","","",""];
let gameActive = true;

let scoreX = 0;
let scoreO = 0;
let scoreDraw = 0;

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

function updateScoreboard(){
    scoreXElements.textContent = scoreX;
    scoreOElements.textContent = scoreO;
    scoreDrawElements.textContent = scoreDraw;
}

function handleCellUsed (clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
};

function handlePlayerChange() {
    currentPlayer = currentPlayer ==="X" ? "O": "X";
    statusDisplay.textContent = currentPlayerMessage();

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
        if (currentPlayer === "X") {
            scoreX++;
        } else {
            scoreO++;
        }

        updateScoreboard();
        statusDisplay.textContent=winMessage();
        gameActive = false;
        return;
    }

    const roundDraw = !gameState.includes("");
    if (roundDraw){
        scoreDraw++;
        updateScoreboard();
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

    handleCellUsed(clickedCell,clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame(){
    currentPlayer = "X";
    gameState = ["","","","","","","","","",];
    gameActive = true;
    statusDisplay.textContent = currentPlayerMessage();
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click',handleRestartGame);

statusDisplay.textContent = currentPlayerMessage();
updateScoreboard();