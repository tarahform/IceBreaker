// Put map on page //
var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.5, lng: -98.35 },
        zoom: 8
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log("POSITION: " + JSON.stringify(position));
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}; // end of map on page //
// // -------------//

// FOURSQUARE API
var clientID = "ROUJL50N3DXNBVUDYAG03BYSF4B5PYET4WWJNIQ0DGR5NOOK";
var clientSecret = "CI1G4J1YZ4YXFCQGNVBAPVA5FGLUEKFR3VSK0ESH2BEKYANW";
var fourSquareURL = "https://api.foursquare.com/v2/venues/search?&near=Chicago"
    + "&client_id=" + clientID + "&client_secret=" + clientSecret 
    + "&v=20180604" + "&categoryId=4bf58dd8d48988d1e0931735";

    $.ajax({
        method: "GET",
        url: fourSquareURL,
    }).then(function (response) {
        
        });