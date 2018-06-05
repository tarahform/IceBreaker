// AOS //
AOS.init();
// end of AOS //

//==========================================================================//
// Test Map with markers //
var map;
var markers = [];
function createMarker(location) {
    var marker = new google.maps.Marker({
        map: map,
        position: location.latlng,
        title: location.name,
        /*foursquare loop here*/
        animation: google.maps.Animation.DROP
    });
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">' + /*foursquare loop here - name of place*/ + '</h1>' +
        '<div id="bodyContent">' +
        '<p><a href="LINKTOMENU">' + /*foursquare loop here*/Menu + '</a></p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    function initMap() {
        var chicago = { lat: 41.8781, lng: 87.6298 };

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
        markers.push(marker);
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
}
// Test Map with markers //
//==========================================================================//

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

//==========================================================================//
// progress bar //
var progress_circle = $(".my-progress-bar").gmpc({
    // color
    color: "#000000",
    // height
    height: "300px",
    // width
    width: "300px",
    // line width
    line_width: 8,
    // stating value
    starting_position: 25,
    // max value
    percent: 100,
    // false = counterclockwise
    counter_clockwise: false,
    // show value
    percentage: true,
    // custom counter text
    text: ''
})
// end progress bar //
//==========================================================================//
