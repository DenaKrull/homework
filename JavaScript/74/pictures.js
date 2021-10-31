(function() {
    'use strict';

    const input = $('#search input');
    const searchButton = $('#search button');
    const displayImages = $('#images');

    const next = $('#next');
    const previous = $('#previous');
    let array = [];

    searchButton.click((e) => {
        e.preventDefault();
        displayImages.empty();
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${input.val()}&format=json&jsoncallback=?`)
            .then((images) => {
                images.items.forEach(image => {
                    $(`<li>
                    <p>${image.title}</p>
                    <img id ="img" src="${image.media.m}"></li>`)
                        .appendTo(displayImages);
                    array.push(image);

                    // console.log(array);

                });

            });
    });


    displayImages.click(() => {
        console.log('image clicked');
    });
    let i = 0;
    next.click(() => {
        console.log(array);
        displayImages.append(array[i]);
        i++;
        // array[i++].appendTo(displayImages);

    });
    previous.click(() => {
        i--;
        displayImages.append(array[i]);

    });

}());