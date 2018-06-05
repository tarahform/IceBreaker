// AOS //
AOS.init();
// end of AOS //

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

var coffeShopId = "4bf58dd8d48988d1e0931735"
var foodId = "4d4b7105d754a06374d81259"

// FOURSQUARE API
function getFromFourSquare(categoryId) {
    var clientID = "ROUJL50N3DXNBVUDYAG03BYSF4B5PYET4WWJNIQ0DGR5NOOK";
    var clientSecret = "CI1G4J1YZ4YXFCQGNVBAPVA5FGLUEKFR3VSK0ESH2BEKYANW";
    var fourSquareURL = "https://api.foursquare.com/v2/venues/search?&near=Chicago"
        + "&client_id=" + clientID + "&client_secret=" + clientSecret
        + "&v=20180604" + "&categoryId=" + categoryId;

    return $.ajax({
        method: "GET",
        url: fourSquareURL,
    })
}

function returnVenueLocations (venueList) {
    var newList = [];

    for (var i = 0; i < venueList.length; i++) {
        var thisShop = {
            name: venueList[i].name,
            lat: venueList[i].location.lat,
            lng: venueList[i].location.lng
        }

        newList.push(thisShop);
    }

    return newList;
}

Promise.all([getFromFourSquare(coffeShopId), getFromFourSquare(foodId)]).then(function(values) {
    // console.log(values);

    var coffeeResponse = values[0].response.venues;
    var foodResponse = values[1].response.venues;

    var coffeeShops = returnVenueLocations(coffeeResponse);
    var foodShops = returnVenueLocations(foodResponse);
    
    console.log(coffeeShops);
    console.log(foodShops);
})

