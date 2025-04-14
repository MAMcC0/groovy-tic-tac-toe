const statusDisplay = document.getElementById('status');
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton');


let currentPlayer = "X";
let gameState = ["","","","","","","","",""];
let gameActive = true;

const winConditions = [
    []
]