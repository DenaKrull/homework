import crunchsound from './media/crunch.mp3';
import clicksound from './media/click.wav';
import { THING_SIZE, context, canvas } from './constants.js';
const crunchSound = new Audio(crunchsound);
const clickSound = new Audio(clicksound);
export const snakeHead = new Image();
export const greenCircle = new Image();

export default class Snake {
    constructor() {
        this.body = [{ x: 0, y: 0 }];
        this.direction = null;

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    if (this.body.length === 1 || this.direction !== 'ArrowDown') {
                        this.direction = event.key;
                    }
                    break;
                case 'ArrowDown':
                    if (this.body.length === 1 || this.direction !== 'ArrowUp') {
                        this.direction = event.key;
                    }
                    break;
                case 'ArrowLeft':
                    if (this.body.length === 1 || this.direction !== 'ArrowRight') {
                        this.direction = event.key;
                    }
                    break;
                case 'ArrowRight':
                    if (this.body.length === 1 || this.direction !== 'ArrowLeft') {
                        this.direction = event.key;
                    }
                    break;
            }
            clickSound.currentTime = 0;
            clickSound.play();
        });
        this.draw();
    }
    draw() {
        context.drawImage(snakeHead, this.x, this.y, THING_SIZE, THING_SIZE);
        for (let i = 1; i < this.body.length; i++) {
            context.drawImage(greenCircle, this.body[i].x, this.body[i].y, THING_SIZE, THING_SIZE);
        }

        if (!localStorage.highscore) { localStorage.setItem('highscore', `${highscore}`); }

    }
    get x() {
        return this.body[0].x;
    }
    get y() {
        return this.body[0].y;
    }
    move() {
        let x = this.x;
        let y = this.y;
        let segmentFormerlyknownastail = this.body.pop();
        let oldTailx = segmentFormerlyknownastail.x;
        let oldTaily = segmentFormerlyknownastail.y;

        switch (this.direction) {
            case 'ArrowRight':
                x += THING_SIZE;
                break;
            case 'ArrowLeft':
                x -= THING_SIZE;
                break;
            case 'ArrowUp':
                y -= THING_SIZE;
                break;
            case 'ArrowDown':
                y += THING_SIZE;
                break;
        }
        if (!gameOver) {
            segmentFormerlyknownastail.x = x;
            segmentFormerlyknownastail.y = y;
            this.body.unshift(segmentFormerlyknownastail);
        }

        if (x < 0 || x > canvas.width - THING_SIZE || y < 0 || y > canvas.height - THING_SIZE) {
            gameOver = true;
            console.log('game over');
        }
        if (this.isOnTopOF(x, y, 3)) {
            gameOver = true;
        }
        if (apple) {
            this.isEaten(oldTailx, oldTaily);
        }

        this.draw();

    }
    isEaten(oldTailx, oldTaily) {
        if (apple) {
            if (this.x === apple.x && this.y === apple.y) {
                console.log('got some food');
                score++;
                speed = speed * 0.9;
                crunchSound.currentTime = 0;
                crunchSound.play();

                this.body.push({
                    x: oldTailx,
                    y: oldTaily
                });
                this.draw();
                apple.move();
            }
        }

        if (localStorage.highscore) {
            if (score > localStorage.highscore) {
                highscore = score;
                localStorage.setItem('highscore', `${highscore}`);
            }

        }
    }
    isOnTopOF(x, y, startIndex = 0, endIndex = this.body.length - 1) {
        for (let i = startIndex; i <= endIndex; i++) {
            if (this.body[i].x === x && this.body[i].y === y) {
                return true;
            }

        }
        return false;
    }
}