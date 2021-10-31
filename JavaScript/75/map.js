/*global google */
(async function() {
    'use strict';
    const searchInput = $('#search input');
    const searchButton = $('#search button');
    const home = {
        lat: 41.15115690170682,
        lng: -74.08001268842538
    };

    async function fetchGeonames(query) {
        const url = `https://secure.geonames.org/wikipediaSearch?q=${query}&maxRows=10&username=dkrull&type=json`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('fetch done');
        return data;
    }

    const map = new google.maps.Map(document.getElementById('map'), {
        center: home,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    });

    function createMarker(place) {
        const marker = new google.maps.Marker({
            position: {
                lat: place.lat,
                lng: place.lng
            },
            map: map,
            icon: {
                url: place.thumbnailImg,
                scaledSize: new google.maps.Size(50, 50)
            },
            Animation: google.maps.Animation.DROP,
            title: place.title
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(`${place.summary}<br>
            <a target ="_blank" href ="http://${place.wikipediaUrl}">more info</a>`);
            infoWindow.open(map, marker);
        });
    }

    searchButton.click(async() => {
        $("#places").empty();
        const places = await fetchGeonames(searchInput.val());
        places.geonames.forEach(place => {
            $(`<li id ="${place.title}">
            <p>${place.title}</p>
            <img id ="img" src="${place.thumbnailImg}" alt="${place.title}"></li>`)
                .appendTo($('#places'))
                .click(function() {
                    const position = {
                        lat: place.lat,
                        lng: place.lng
                    };
                    // createMarker(place);
                    map.setCenter(position);
                    map.setZoom(18);
                });
            createMarker(place);
        });

    });

}());