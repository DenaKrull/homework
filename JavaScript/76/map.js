/*global google */
(async function() {
    'use strict';
    const searchInput = $('#search input');
    const searchButton = $('#search button');
    const home = {
        lat: 41.15115690170682,
        lng: -74.08001268842538
    };
    let selectedPlace;

    const map = new google.maps.Map(document.getElementById('map'), {
        center: home,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    });

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


    const bounds = new google.maps.LatLngBounds();

    function createMarker(place) {
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
        bounds.extend(marker.getPosition());

    }

    searchButton.click(async() => {
        $("#places").empty();

        const places = await fetchGeonames(searchInput.val());
        places.geonames.forEach(place => {
            const li = $(`<li> <img id ="img" src="${place.thumbnailImg}" alt="${place.title}">
            <h4>${place.title}</h4>
            <div class="summary">${place.summary}</div>
         </li>`)
                .appendTo($('#places'))
                .click(() => {

                    if (selectedPlace === place) {
                        $('.summary').slideUp('slow');
                        selectedPlace = null;
                        return;
                    }
                    selectedPlace = place;
                    $('.summary').slideUp('slow');
                    li.find('.summary').slideDown('slow');
                    const position = {
                        lat: place.lat,
                        lng: place.lng
                    };
                    map.fitBounds(bounds);
                    map.setCenter(position);
                    map.setZoom(18);
                });
            createMarker(place);
        });

    });

    ////// create drawing manager

    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });

    drawingManager.setMap(map);

    const markerArray = JSON.parse(localStorage.getItem("marker")) || [];
    const circleArray = JSON.parse(localStorage.getItem("circle")) || [];
    const rectangleArray = JSON.parse(localStorage.getItem("rectangle")) || [];
    const polygonArray = JSON.parse(localStorage.getItem("polygon")) || [];
    const polylineArray = JSON.parse(localStorage.getItem("polyline")) || [];

    //marker 
    google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
        markerArray.push({
            position: {
                lat: marker.getPosition().lat(),
                lng: marker.getPosition().lng()
            }
        });
        localStorage.setItem('marker', JSON.stringify(markerArray));
    });

    const markerData = localStorage.getItem('marker');

    if (markerData) {
        const marker = JSON.parse(markerData);
        for (let i = 0; i < marker.length; i++) {
            new google.maps.Marker({
                position: {
                    lat: marker[i].position.lat,
                    lng: marker[i].position.lng
                },
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'Your marker',
                icon: {
                    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    scaledSize: new google.maps.Size(50, 50)
                }
            });
        }
    }

    //circle

    google.maps.event.addListener(drawingManager, 'circlecomplete', circle => {
        circleArray.push({
            center: circle.getCenter(),
            radius: circle.getRadius()
        });
        localStorage.setItem('circle', JSON.stringify(circleArray));
    });

    const circleData = localStorage.getItem('circle');
    if (circleData) {
        const circle = JSON.parse(circleData);
        for (let i = 0; i < circle.length; i++) {
            new google.maps.Circle({
                center: circle[i].center,
                radius: circle[i].radius,
                map: map,
                animation: google.maps.Animation.DROP,
                fillColor: "#ffff00",
                fillOpacity: 1,
                strokeWeight: 5,
                clickable: false,
                editable: true,
                zIndex: 1,
                scaledSize: new google.maps.Size(10, 10),
                title: 'Your circle'
            });
        }
    }

    //rectangle
    google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangle => {
        rectangleArray.push({
            bounds: rectangle.getBounds()
        });
        localStorage.setItem('rectangle', JSON.stringify(rectangleArray));
    });


    const rectangleData = localStorage.getItem('rectangle');
    if (rectangleData) {
        const rectangle = JSON.parse(rectangleData);
        for (let i = 0; i < rectangle.length; i++) {
            new google.maps.Rectangle({
                bounds: rectangle[i].bounds,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'Your rectangle'
            });
        }
    }

    //polygon
    google.maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
        polygonArray.push({
            coordinates: polygon.getPath().getArray()
        });
        localStorage.setItem('polygon', JSON.stringify(polygonArray));
    });

    const polygonData = localStorage.getItem('polygon');
    if (polygonData) {
        const polygon = JSON.parse(polygonData);
        for (let i = 0; i < polygon.length; i++) {
            new google.maps.Polygon({
                paths: polygon[i].coordinates,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'Your polygon'
            });
        }
    }


    //polyline
    google.maps.event.addListener(drawingManager, 'polylinecomplete', polyline => {
        polylineArray.push({
            coordinates: polyline.getPath().getArray()
        });
        localStorage.setItem('polyline', JSON.stringify(polylineArray));
    });

    const polylineData = localStorage.getItem('polyline');
    if (polylineData) {
        const polyline = JSON.parse(polylineData);
        for (let i = 0; i < polyline.length; i++) {
            new google.maps.Polyline({
                path: polyline[i].coordinates,
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 3,
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'Your polyline'

            });
        }
    }








}());