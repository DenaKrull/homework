'use strict';

const dayOfWeek = (function() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getIndex(dayName) {
        return days.findIndex(d => d.toLowerCase() === dayName.toLowerCase()) + 1;
    }

    return {
        getMonth: (index) => days[index - 1],
        getIndex: getIndex
    };
})();

console.log('dayOfWeek.getIndex("Monday")', dayOfWeek.getIndex('Monday'));
console.log('dayOfWeek.getMonth("4")', dayOfWeek.getMonth(4));


const interestCalculater = (function() {

    const interestRate = 0;
    const numberOfYears = 0;

    // function setRate(rate) {
    //     return interestRate === rate;
    // }


    function calculate(rate, year) {
        return rate * year;
    }
    return {
        calculate: calculate,
        setRate: (rate) => interestRate === rate,
        setYear: (year) => numberOfYears === year
    };
})();


console.log(interestCalculater.calculate(5, '.02'));