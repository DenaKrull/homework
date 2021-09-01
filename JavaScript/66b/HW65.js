(function() {
    'use strict';

    const table = document.getElementById('table');
    const row = document.getElementById('row');


    function changeColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        document.body.style.color = "#" + randomColor2;


        const row = table.insertRow();
        const time = row.insertCell();
        const color = row.insertCell();

        color.innerText = 'background Color = ' + randomColor + '  text color = ' + randomColor2;

        time.innerText = new Date().toLocaleString();
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

    table.addEventListener('click', () => {
        clearInterval(start);
        button.innerText = 'START';
        // document.row.style.backgroundColor = table.innerHTML;
        // document.row.style.color = table.innerHTML;
    });

    row.addEventListener('click', () => {

    });


})();