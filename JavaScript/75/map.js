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
        try {
            const url = `https://secure.geonames.org/wikipediaSearch?q=${query}&maxRows=10&username=dkrull&type=json`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }


    const map = new google.maps.Map(document.getElementById('map'), {
        center: home,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    });


    function createMarker(place) {
        const bounds = new google.maps.LatLngBounds();

        const marker = new google.maps.Marker({
            position: {
                lat: place.lat,
                lng: place.lng
            },
            map: map,
            icon: place.thumbnailImg ? {
                url: place.thumbnailImg,
                scaledSize: new google.maps.Size(50, 50)
            } : undefined,
            Animation: google.maps.Animation.DROP,
            title: place.title
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(`${place.summary}<br>
            <a target ="_blank" href ="http://${place.wikipediaUrl}">more info</a>`);
            infoWindow.open(map, marker);
        });
        bounds.extend(marker.position);
        map.fitBounds(bounds);
    }
    let selectedPlace;
    searchButton.click(async() => {
        $("#places").empty();

        const places = await fetchGeonames(searchInput.val());
        places.geonames.forEach(place => {
            $(`<li> <img id ="img" src="${place.thumbnailImg}" alt="${place.title}  ">
            <h4>${place.title}</h4>
            <div class="summary">${place.summary}</div>
         </li>`)
                .appendTo($('#places'))
                .click(function() {
                    if (selectedPlace === place) {
                        $('.summary').slideDown('slow');
                        return;
                    }
                    selectedPlace = place;


                    $('.summary').slideUp('slow');

                    const position = {
                        lat: place.lat,
                        lng: place.lng
                    };

                    map.setCenter(position);
                    map.setZoom(18);
                });
            createMarker(place);
        });

    });

}());