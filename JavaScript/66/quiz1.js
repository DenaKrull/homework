(function() {
    'use strict';

    const numbers = [2, 4, 6];


    function myMap(array, callback) {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            result[i] = callback(array[i]);

        }

        return result;
    }
    console.log('original array', numbers);
    console.log('mapped array', myMap(numbers, (n) => n * 2));
    console.log('original array', numbers);

})();