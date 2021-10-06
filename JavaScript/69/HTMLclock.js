window.pcs = window.pcs || {};
window.pcs.stopwatch = (function() {
    'use strict';
    const clock = document.createElement('button');
    document.body.appendChild(clock);


    let hours = 0;
    let seconds = 0;


    function stopwatch() {


        setInterval(() => {
            seconds++;
            const middleSection = Math.trunc((seconds - (3600 * hours)) / 60);
            const lastSection = (seconds % 60);
            const middleSection2 = Math.trunc((seconds / 60));


            if (seconds >= 3600) {
                hours = Math.trunc(seconds / 3600);
                clock.innerText = `${hours}:${middleSection}:${lastSection}`;
            } else {
                clock.innerText = `${hours}:${middleSection2}:${lastSection}`;
            }

        }, 1000);
    }


    function getDate() {
        let d = new Date();
        clock.innerText = d.toLocaleTimeString();

    }

    function currentTime() {
        setInterval(() => {
            getDate();
        }, 1000);
    }

    function createClock() {
        getDate();
        currentTime();


    }

    function createStopwatch() {
        clock.innerText = "00:00:00";
        stopwatch();

    }
    return {
        createClock: createClock,
        createStopwatch: createStopwatch
    };


}());