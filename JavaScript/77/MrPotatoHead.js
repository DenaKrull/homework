(function() {
    'use strict';
    let dragging = null;
    let offset;
    let nextZIndex = 1;


    const pictures = JSON.parse(localStorage.getItem('pictures')) || [];

    async function getJSON() {
        try {
            const response = await fetch('images.json');
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            data.forEach(picture => {
                pictures.push({
                    url: picture.url,
                    top: picture.top,
                    left: picture.left

                });
                localStorage.setItem('pictures', JSON.stringify(pictures));
            });
        } catch (err) {
            console.error(err);
        }


    }
    getJSON();

    $(document)
        .on('mousedown', '#images', e => {
            console.log('mousedown');
            // e.preventDefault();

            dragging = $(e.target);
            offset = { x: e.offsetX, y: e.offsetY };
            dragging.css('z-index', nextZIndex++);
        })
        .mousemove(e => {
            if (dragging) {
                e.preventDefault(); // prevent weird occasional no drag cursor
                console.log('mousemove', e.offsetY, e.offsetX);
                dragging.css('z-index', nextZIndex++);
                dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
            }
        })
        .mouseup((e) => {
            if (dragging) {
                console.log('mouseup');
                pictures.push({
                    // type: id,
                    style: {
                        top: e.pageY - offset.y,
                        left: e.pageX - offset.x
                            // zIndex: e.target.style.zIndex
                    }
                });
                dragging = null;

            }
        });




    if (pictures) {
        pictures.forEach(picture => {
            $(`#${picture.type}`).css({
                top: picture.style.top,
                left: picture.style.left
            });
            // $('#images').css('z-index', nextZIndex++);
            // const picture = JSON.parse(pictureData);


        });
    }



}());