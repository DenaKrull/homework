(function() {
    'use strict';
    const clearButton = $('#clear');



    const partsElem = $('#parts');
    const NUM_PARTS = 15;
    const PART_MARGIN = 100;
    let maxZindex = 0;
    let x = 0;
    let y = 0;
    const maxWidth = partsElem.innerWidth() - 250;
    for (let i = 2; i < NUM_PARTS; i++) {
        $(`<img class="part" src="images/${i}.png">`)
            .appendTo(partsElem)
            .css({ top: y, left: x });
        x += PART_MARGIN;
        if (x >= maxWidth) {
            x = 0;
            y += PART_MARGIN;
        }
    }
    $(`<img class="part potato" src="images/1.png">`)
        .appendTo(partsElem)
        .css({ top: 129, left: 505 });
    $(`<img class="part potato" src="images/0.png">`)
        .appendTo(partsElem)
        .css({ top: 129, left: 823 });

    const parts = $('.part');

    function sound(src) {
        const sound = document.createElement('audio');
        sound.src = src;
        sound.setAttribute('preload', 'auto');
        sound.setAttribute('controls', 'none');
        sound.style.display = 'none';
        document.body.appendChild(sound);
        sound.play();
    }

    function saveState() {
        const partsInfo = [];
        parts.each((i, p) => {
            const part = $(p);
            partsInfo.push({
                src: part.attr('src'),
                top: part.css('top'),
                left: part.css('left'),
                zIndex: part.css('zIndex')
            });
        });
        localStorage.setItem('potato', JSON.stringify(partsInfo));
    }


    let dragging = null;
    let offset;
    $(document)
        .on('mousedown', '.part', e => {
            dragging = $(e.target);
            offset = { x: e.offsetX, y: e.offsetY };
            // dragging.css({position: 'relative'});
            if (!dragging.hasClass('potato')) {
                dragging.css({ zIndex: ++maxZindex });
            }
        })
        .mousemove(e => {
            if (dragging) {
                e.preventDefault(); // prevent weird occasional no drag cursor
                dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
            }
        })
        .mouseup(() => {
            if (dragging) {
                dragging = null;
                saveState();
                sound('media/effect.wav');
            }
        });


    if (localStorage.potato) {
        const partsInfo = JSON.parse(localStorage.potato);
        partsInfo.forEach(partInfo => {
            $(`img[src="${partInfo.src}"]`).css(partInfo);
        });
    }

    clearButton.click(() => {
        localStorage.clear();
        console.log('cleared');
        location.reload();
    });

}());