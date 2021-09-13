window.app = window.app || {};
window.app.counter = (function(module) {
    'use strict';

    let counter = 0;
    module.add = () => counter++;
    module.getCount = () => console.log(counter);

    return module;

})(window.app.counter || {});

// SL - nice