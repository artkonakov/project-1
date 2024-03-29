$(document).ready(function() {
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        verticalCentered: true

    });
});

$("#target").click(function() {

    $.fn.pagepiling.moveTo(2);

});

new Maplace({
    map_div: '#gmap',
    locations: [{
        lat: 55.69224432,
        lon: 37.5475471,
        zoom: 12
    }],
    styles: {
        'main': [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#e10011"
            }, {
                "visibility": "on"
            }]
        }]
    }
}).Load();
