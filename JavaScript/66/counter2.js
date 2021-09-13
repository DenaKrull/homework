window.app = window.app || {};
window.app.counter2 = (function(module) {
    'use strict';
    let numberOfCounters = 0;
    module.createCounter = function() {

        let counter = 0;
        numberOfCounters++;
        return {
            add: () => counter++,
            getCount: () => console.log(counter),

        };
    };

    module.getNumberOfCounters = () => console.log('number of counters', numberOfCounters);

    return module;

})(window.app.counter2 || {});

// SL - nice
// SL - grade - 100