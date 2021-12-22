import './css/index.css';
import $ from 'jquery';

import snakehead from './images/snakehead.png';


let clickCount = 0;

$('#button').click(() => {
    $('#result').text(`I was clicked ${++clickCount} times`);
    const snake = new Image();
    snake.src = snakehead;
    document.body.appendChild(snake);
});