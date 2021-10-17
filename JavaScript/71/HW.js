(function() {
    'use strict';

    const inputFile = $('#file');
    const loadButton = $('#button');
    const fileResult = $('#viewFile');

    loadButton.click((e) => {
        e.preventDefault();
        loading();

        fetch(inputFile.val())
            .then(r => {
                if (!r.ok) {
                    console.log(typeof r, r);
                    console.error(`${r.status} ${r.statusText}`);
                }
                console.log(r.text());
            })
            .then(fileResult.text(inputFile))

        .catch(err => console.log('OOPS', err));
        stopLoading();
    });

    function loading() {
        $('#loading').text("Loading...");
    }

    function stopLoading() {
        $('#loading').remove();
    }
}());