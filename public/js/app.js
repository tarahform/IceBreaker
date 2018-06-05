// AOS //
AOS.init();
// end of AOS //

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
    // Test Map with markers //

    // FOURSQUARE API
    var clientID = "ROUJL50N3DXNBVUDYAG03BYSF4B5PYET4WWJNIQ0DGR5NOOK";
    var clientSecret = "CI1G4J1YZ4YXFCQGNVBAPVA5FGLUEKFR3VSK0ESH2BEKYANW";
    var fourSquareURL = "https://api.foursquare.com/v2/venues/search?&near=Chicago"
        + "&client_id=" + clientID + "&client_secret=" + clientSecret
        + "&v=20180604" + "&categoryId=4bf58dd8d48988d1e0931735";

    // $.ajax({
    //     method: "GET",
    //     url: fourSquareURL,
    // }).then(function (response) {

    //     });