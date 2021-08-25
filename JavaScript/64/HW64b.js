window.myApp = window.myApp || {};

window.myApp.utils = (function(compare) {
    'use strict';

    compare.stringCaseInsensitiveEquals = (string1, string2) => console.log(string1.toUpperCase() === string2.toUpperCase());
    return compare;
})(window.myApp.utils || {});

// window.myApp.utils.stringCaseInsensitiveEquals('apple', 'ApPle');
// window.myApp.utils.stringCaseInsensitiveEquals('apple', 'frog');