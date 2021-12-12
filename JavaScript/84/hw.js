'use strict';

const nameElem = document.getElementById('name');
const resultElem = document.getElementById('result');


nameElem.addEventListener('input', function() {
    resultElem.innerHTML = nameElem.value;
});