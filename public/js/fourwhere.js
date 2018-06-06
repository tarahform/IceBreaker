//==========================================================================//
// Test Map with markers //
var map;
var markers = [];
function createMarkers(features) {
    features.forEach(feature => {
        var marker = new google.maps.Marker({
            position: feature.position,
            map: map,
            animation: google.maps.Animation.DROP,
        });
        markers.push(marker);
    });
}
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function initMap() {
    var chicago = { lat: 41.8781, lng: -87.6298 };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: chicago,
        mapTypeId: 'terrain'
    });

    // This event listener will call addMarker() when the map is clicked.
    map.addListener('click', function (event) {
        addMarker(event.latLng);
    });

    // Adds a marker at the center of the map.
    addMarker(chicago);
}
// Adds a marker to the map and push to the array.
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}
// Shows any markers currently in the array.
function showMarkers() {
    setMapOnAll(map);
}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

// Test Map with markers //
//==========================================================================//

// Variables for each Foursquare CategoryId 
var coffeShopId = "4bf58dd8d48988d1e0931735";
var foodId = "4d4b7105d754a06374d81259";
var barId = "4bf58dd8d48988d116941735";
var breweryId = "50327c8591d4c4b30a586d5d";

// FORSQUARE API
function getFromFourSquare(categoryId) {
    var clientID = "TRLYPN3LXDOCRD45MYN3W4T4GEISSM0IKUVDKRIVB3KIMPYI";
    var clientSecret = "1DCSTIV3F5EUKJTXDTCCFLZSLP4QROJ5RHI5PNAK2EKRJ5WV";
    var fourSquareURL = "https://api.foursquare.com/v2/venues/search?&near=Chicago"
        + "&client_id=" + clientID + "&client_secret=" + clientSecret
        + "&v=20180604" + "&categoryId=" + categoryId;

    return $.ajax({
        method: "GET",
        url: fourSquareURL,
    })
}

function returnVenueLocations(venueList) {
    var newList = [];

    for (var i = 0; i < venueList.length; i++) {
        var thisShop = {
            name: venueList[i].name,
            position: {
                lat: venueList[i].location.lat,
                lng: venueList[i].location.lng
            }
        }

        newList.push(thisShop);
    }

    return newList;
}

// promise <-- returned from getFromFourSquare ajax call
// .all() <-- takes an array of four promises 
// --- this waits until all promises have been resolved (data has been returned)
Promise.all([getFromFourSquare(coffeShopId), getFromFourSquare(foodId), getFromFourSquare(barId), getFromFourSquare(breweryId)])
    // .then will not run until all these promises is resolved
    .then(function (values) {
        // console.log(values);
        // stores responses of ajax call in their own variables 
        // below is all locations
        var coffeeResponse = values[0].response.venues;
        var foodResponse = values[1].response.venues;
        var barResponse = values[2].response.venues;
        var breweryResponse = values[3].response.venues;

        var coffeeShops = returnVenueLocations(coffeeResponse);
        var foodShops = returnVenueLocations(foodResponse);
        var barShops = returnVenueLocations(barResponse);
        var breweryShops = returnVenueLocations(breweryResponse);

        // creates all markers for venues returned from the getFromFourSquare ajax call
        createMarkers(coffeeShops);
        createMarkers(foodShops);
        createMarkers(barShops);
        createMarkers(breweryShops);
    })
    // End of Foursquare //
    //==========================================================================//