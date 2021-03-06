window.pcs = function(id) {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(elem, prop, value) {
        elem.style[prop] = value;
    }

    function getCss(elem, prop) {
        return getComputedStyle(elem)[prop];
    }
    let interval;

    function changeColor(lengthOfTime, speed) {
        let run = 0;
        interval = setInterval(() => {
            run++;
            // const color1 = getRandomColor();
            // setColors(color1);
            setColors(getRandomColor());

            if (run === lengthOfTime) {
                clearInterval(interval);
            }

        }, speed);
    }

    function getRandomColorPart() {
        return Math.floor(Math.random() * 256);
    }

    function getRandomColor() {
        const r = getRandomColorPart();
        const g = getRandomColorPart();
        const b = getRandomColorPart();

        return `rgb(${r}, ${g}, ${b})`;
    }

    function setColors(color) {
        setCss(document.body, 'color', color);

    }

    function data(variable, value) {
        variable = value;
    }

    const theElem = get(id);

    return {

        css: function(prop, value) {
            if (arguments.length === 1) {
                return getCss(theElem, prop);
            }
            setCss(theElem, prop, value);
            return this;
        },
        click: function(callback) {
            theElem.addEventListener('click', callback);
            return this;
        },
        hide: function() {
            setCss(theElem, 'display', 'none');
            return this;
        },
        show: function() {
            setCss(theElem, 'display', 'block');
            return this;
        },
        changeColor: changeColor
    };
};