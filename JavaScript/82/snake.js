(function() {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    const THING_SIZE = 40;
    let gameOver = false;
    let score = 0;
    let snake;
    let apple;
    let speed = 500;
    let highscore = 0;
    const crashSound = document.getElementById('crash');
    const crunchSound = document.getElementById('crunch');
    const overSound = document.getElementById('over');
    const clickSound = document.getElementById('click');

    function resizeCanvas() {
        canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % THING_SIZE);
        canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % THING_SIZE);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();


    class Snake {
        constructor() {
            this.body = [{ x: 0, y: 0 }];
            this.direction = null;

            document.addEventListener('keydown', (event) => {
                switch (event.key) {
                    case 'ArrowUp':
                    case 'ArrowDown':
                    case 'ArrowLeft':
                    case 'ArrowRight':
                        this.direction = event.key;

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

            if (this.body.length > 1) {
                this.body.unshift({
                    x: this.body[0].x,
                    y: this.body[0].y
                });
                this.body.pop();

            }

            if (x < 0 || x > canvas.width - THING_SIZE || y < 0 || y > canvas.height - THING_SIZE) {
                gameOver = true;
                console.log('game over');


            } else {
                this.body[0].x = x;
                this.body[0].y = y;

            }
            this.isEaten();
            this.draw();
        }


        isEaten() {
            if (this.x === apple.x && this.y === apple.y) {
                console.log('got some food');
                score++;

                speed = speed * 0.9;
                crunchSound.currentTime = 0;
                crunchSound.play();

                this.body.push({
                    x: this.x,
                    y: this.y
                });
                this.draw();
                apple.move();
            }
            if (score > localStorage.highscore) {
                highscore = score;
                localStorage.setItem('highscore', `${score}`);
            }

        }

    }
    class Apple {
        constructor() {
            this.move();
        }
        draw() {
            context.drawImage(appleImg, this.x, this.y, THING_SIZE, THING_SIZE);
        }
        move() {
            this.x = this.getRandomNumber(0, canvas.width - 1);
            this.y = this.getRandomNumber(0, canvas.height - 1);
            this.draw();
        }
        getRandomNumber(min, max) {
            let r = Math.floor(Math.random() * (max - min + 1)) + min;
            r = r - r % THING_SIZE;
            return r;
        }
    }


    function gameLoop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '30px Arial ';
        context.strokeStyle = 'white';
        context.strokeText(`Score: ${score}`, canvas.width - 140, 40);
        context.strokeText(`Highscore: ${localStorage.getItem('highscore')}`, canvas.width - 195, 80);

        snake.move();
        apple.draw();

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
        context.fillStyle = 'white';
        context.fillText('Press ESC to play again', canvas.width / 2 - 125, canvas.height / 2 + 125);
        document.addEventListener('keydown', (event) => {

            if (event.key === 'Escape') {
                window.location.href = 'snake.html';
            }
        });
    }

    const snakeHead = new Image();
    snakeHead.src = 'images/snakehead.png';
    snakeHead.onload = () => {
        snake = new Snake();
        setTimeout(gameLoop, speed);
    };

    const greenCircle = new Image();
    greenCircle.src = 'images/greencircle.png';

    const appleImg = new Image();
    appleImg.src = 'images/redapple.png';
    appleImg.onload = () => {
        apple = new Apple();
    };

}());