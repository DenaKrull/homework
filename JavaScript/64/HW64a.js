window.myApp = window.myApp || {};

window.myApp.utils = (function(findDay) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    findDay.getDay = (index) => days[index - 1];
    findDay.getIndex = (dayName) => days.findIndex(d => d.toLowerCase() === dayName.toLowerCase()) + 1;

    return findDay;
})(window.myApp.utils || {});

// console.log(window.myApp.utils.getDay(2));
// console.log(window.myApp.utils.getIndex('Tuesday'));