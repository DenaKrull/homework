window.pcs = window.pcs || {};
window.pcs.stopwatch = (function() {
    'use strict';
    const clock = document.createElement('div');
    document.body.appendChild(clock);
    const watch = document.createElement('div');
    document.body.appendChild(watch);

    watch.style.position = 'absolute';
    watch.style.left = '1%';





    function createStopwatch() {
        watch.innerText = "00:00:00";
        stopwatch();

    }

    function stopwatch() {
        let hours = 0;
        let seconds = 0;

        setInterval(() => {
            seconds++;
            const middleSection = Math.trunc((seconds - (3600 * hours)) / 60);
            const lastSection = (seconds % 60);
            const middleSection2 = Math.trunc((seconds / 60));


            if (seconds >= 3600) {
                hours = Math.trunc(seconds / 3600);
                watch.innerText = `${hours}:${middleSection}:${lastSection}`;
            } else {
                watch.innerText = `${hours}:${middleSection2}:${lastSection}`;
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


    return {
        createClock: createClock,
        createStopwatch: createStopwatch
    };


}());