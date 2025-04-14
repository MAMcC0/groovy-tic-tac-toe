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

