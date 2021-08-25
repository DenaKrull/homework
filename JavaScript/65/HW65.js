(function() {
    'use strict';

    function changeColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        document.body.style.color = "#" + randomColor2;
    }

    changeColor();
    setInterval(changeColor, 1000);
    let start = true;
    const button = document.getElementById('button');
    button.addEventListener('click', () => {

        if (!start) {
            start = setInterval(changeColor, 1000);
            button.innerText = 'STOP';
        } else {
            clearInterval(start);
            start = false;
            button.innerText = 'START';
        }




    });


})();