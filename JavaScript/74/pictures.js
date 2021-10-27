(function() {
    'use strict';

    const input = $('#search input');
    const searchButton = $('#search button');
    const displayImages = $('#images');
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

                });

            });
    });

    displayImages.click(() => {
        console.log('image clicked');
    });

}());