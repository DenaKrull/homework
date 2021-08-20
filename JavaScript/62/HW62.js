/* globals interestCalculater */

const dayOfWeek = (function() {
    'use strict';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    return {
        getDay: (index) => days[index - 1],
        getIndex: (dayName) => days.findIndex(d => d.toLowerCase() === dayName.toLowerCase()) + 1
    };
})();

console.log('dayOfWeek.getIndex("Monday")', dayOfWeek.getIndex('Wednesday'));
console.log('dayOfWeek.getMonth("4")', dayOfWeek.getDay(7));


// const 
window.interestCalculater = (function() {

    let interestRate;
    let numberOfYears;

    function calculate(principle) {
        let p = principle;
        for (let i = 0; i < numberOfYears; i++) {
            p += p * interestRate;
        }
        return p - principle;
    }

    return {
        setYears: function(year) {
            numberOfYears = year;
            return this;
        },

        setRate: function(rate) {
            interestRate = rate;
            return this;
        },
        calculate: calculate
    };
})();


interestCalculater.setYears(2);
interestCalculater.setRate(0.1);
console.log(interestCalculater.calculate(100));

console.log(
    interestCalculater.setYears(3).setRate(0.05).calculate(100)
);