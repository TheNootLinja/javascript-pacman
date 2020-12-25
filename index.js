import { LEVEL, OBJECT_TYPE } from './setup.js';

//Classes
import GameBoard from './GameBoard';

// DOM Elements
const gridGame = document.querySelector('#game');
const gameScore = document.querySelector('#score');
const gameStart = document.querySelector('#start-button');

// Game Constants
const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gridGame, LEVEL);

// Initial Setup
let score = 0;
let time = null;
let winCon = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {

}

function checkCollision(pacman, ghosts) {

}

function gameLoop(pacman, ghosts) {

}

function startGame() {

}