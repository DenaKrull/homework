import {
    THING_SIZE,
    context,
    canvas
} from './constants.js';
let snake;
export default class Apple {
    constructor() {
        this.move();
    }
    draw() {
        context.drawImage(appleImg, this.x, this.y, THING_SIZE, THING_SIZE);
    }
    move() {
        do {
            this.x = this.getRandomNumber(0, canvas.width - 1);
            this.y = this.getRandomNumber(0, canvas.height - 1);
        } while (snake.isOnTopOF(this.x, this.y));

        this.draw();
    }
    getRandomNumber(min, max) {
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        r = r - r % THING_SIZE;
        return r;
    }
}

export const appleImg = new Image();