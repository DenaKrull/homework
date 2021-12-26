import './css/index.css';
import greencircle from './images/greenCircle.png';
import redapple from './images/redapple.png';
import snakehead from './images/snakehead.png';
import crashsound from './media/crash.mp3';
import oversound from './media/gameover.wav';

import {
    Apple,
    appleImg
} from './appleClass.js';
import {
    Snake,
    snakeHead,
    greenCircle
} from './snakeClass.js';
import { THING_SIZE, canvas, context } from './constants.js';




// const canvas = document.getElementById('theCanvas');
// // const displayScore = document.getElementById('score');
// const context = canvas.getContext('2d');

// const THING_SIZE = 64;
let gameOver = false;
let score = 0;
let snake;
let apple;
let speed = 500;



const crashSound = new Audio(crashsound);
const overSound = new Audio(oversound);


function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % THING_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % THING_SIZE);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();






function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '30px Arial ';
    context.strokeStyle = 'white';
    context.strokeText(`Score: ${score}`, canvas.width - 140, 40);
    context.strokeText(`Highscore: ${localStorage.getItem('highscore')}`, canvas.width - 195, 80);

    if (apple) {
        apple.draw();
    }
    snake.move();
    if (!gameOver) {
        setTimeout(gameLoop, speed);
    } else {

        context.font = '60px Arial ';
        context.fillStyle = 'white';
        context.fillText('GAME OVER', canvas.width / 2 - 200, canvas.height / 2);
        playAgain();
        crashSound.currentTime = 0;
        crashSound.play();
        overSound.play();
    }
}

function playAgain() {
    context.font = '20px Arial ';
    context.fillStyle = 'green';
    context.fillText('Press ESC to play again', canvas.width / 2 - 125, canvas.height / 2 + 125);
    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape') {
            gameOver = false;

        }
    });
}

// const snakeHead = new Image();
snakeHead.src = snakehead;
snakeHead.onload = () => {
    snake = new Snake();
    setTimeout(gameLoop, speed);
};

// const greenCircle = new Image();
greenCircle.src = greencircle;

// const appleImg = new Image();
appleImg.src = redapple;
appleImg.onload = () => {
    apple = new Apple();
};