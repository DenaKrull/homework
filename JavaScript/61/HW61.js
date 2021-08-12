'use strict';

let letters = ['A', 'B', 'C'];

let isUppercase = (letters) => letters === letters.toUpperCase();
let isLowercase = (letters) => letters === letters.toLowerCase();

function myEvery(theArray, callback) {

    for (let i = 0; i < theArray.length; i++) {
        if (!callback(theArray[i])) {
            return false;
        }
    }
    return true;
}

console.log('every');
// console.log(letters.every(isUppercase));
// console.log(letters.every(isLowercase));
console.log(myEvery(letters, isUppercase));
console.log(myEvery(letters, isLowercase));


let letters2 = ['A', 'b', 'C'];
let isUppercase2 = (letters2) => letters2 === letters2.toUpperCase();
let isLowerCase2 = (letters2) => letters2 === letters2.toLowerCase();

function mySome(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i])) {
            return true;

        }
    }
    return false;
}
console.log('some');
console.log(mySome(letters2, isUppercase2));
console.log(mySome(letters2, isLowerCase2));
// console.log(letters2.some(isUppercase2));
// console.log(letters2.some(isLowerCase2));


console.log('onlyIf');
let numbers = [1, 2, 3, 4, 5, 6];
let number = (number) => number % 2 === 0;


function onlyif(theArray, test, action) {

    for (let i = 0; i < theArray.length; i++) {
        if (test(theArray[i])) {
            action(theArray[i]);

        }
    }

}

onlyif(numbers, number, console.log);


console.log('multiply');

function multiply(a, b) {
    return a * b;
}


console.log(multiply(3, 9));
console.log(multiply(5, 6));

function getMultiplier() {
    return function(a, b) {
        console.log(a * b);
    };
}

let multiplier = getMultiplier();
multiplier(4, 5);

function getBestMultiplier(a) {
    return function(b) {
        console.log(a * b);
    };
}


var multiplyByFive = getBestMultiplier(5);
multiplyByFive(2);

var multiplyBySix = getBestMultiplier(6);
multiplyBySix(2);