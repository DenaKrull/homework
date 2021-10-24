(function() {
    'use strict';

    const videoSelect = $('#videos');
    const errorElem = $('#error');


    async function loadJson(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            return result;
        } catch (e) {
            errorElem.text(e.message);
        }
    }

    async function loadVideos() {
        const videos = await loadJson('videos.json');
        if (videos) {
            videos.forEach(video => {
                if (video.image === "") {
                    video.image = "media/default.jpg";

                }

                videoSelect.append([
                    `<h2> ${video.title} </h2>`,
                    `<video id ="${video.title}" src ="${video.url}"  poster ="${video.image}"></video>`
                ]);
                $(`#${video.title}`).click(function() {
                    console.log(this.id);
                    this.setAttribute("autoplay", "autoplay");
                    // $(`#${video.title}`)[0].play();

                });
                $(`#${video.title}`).hover(function toggleControls() {
                    if (this.hasAttribute("controls")) {
                        this.removeAttribute("controls");
                    } else {
                        this.setAttribute("controls", "controls");

                    }
                });


            });

        }

    }
    loadVideos();
}());