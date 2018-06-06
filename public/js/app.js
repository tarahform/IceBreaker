// AOS //
AOS.init();
// end of AOS //

//==========================================================================//
// Test Map with markers //
var map;
var markers = [];
// function createMarker(location) {
//     var marker = new google.maps.Marker({
//         map: map,
//         position: location.latlng,
//         title: location.name,
//         /*foursquare loop here*/
//         animation: google.maps.Animation.DROP
//     });
//     var contentString = '<div id="content">' +
//         '<div id="siteNotice">' +
//         '</div>' +
//         '<h1 id="firstHeading" class="firstHeading">' + /*foursquare loop here - name of place*/ + '</h1>' +
//         '<div id="bodyContent">' +
//         '<p><a href="LINKTOMENU">' + /*foursquare loop here*/Menu + '</a></p>' +
//         '</div>' +
//         '</div>';

//     var infowindow = new google.maps.InfoWindow({
//         content: contentString
//     });

//     marker.addListener('click', function () {
//         infowindow.open(map, marker);
//     });

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
//==========================================================================//

// Variables for each Foursquare CategoryId 
var coffeShopId = "4bf58dd8d48988d1e0931735";
var foodId = "4d4b7105d754a06374d81259";
var barId = "4bf58dd8d48988d116941735";
var breweryId = "50327c8591d4c4b30a586d5d";

// FORSQUARE API
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

function returnVenueLocations(venueList) {
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

function foursquareController() {
    Promise.all([getFromFourSquare(coffeShopId), getFromFourSquare(foodId), getFromFourSquare(barId), getFromFourSquare(breweryId)]).then(function (values) {
        // console.log(values);
    
        var coffeeResponse = values[0].response.venues;
        var foodResponse = values[1].response.venues;
        var barResponse = values[2].response.venues;
        var breweryResponse = values[3].response.venues;
    
        var coffeeShops = returnVenueLocations(coffeeResponse);
        var foodShops = returnVenueLocations(foodResponse);
        var barShops = returnVenueLocations(barResponse);
        var breweryShops = returnVenueLocations(breweryResponse);
    
        console.log(coffeeShops);
        console.log(foodShops);
        console.log(barShops);
        console.log(breweryShops);
    })
}

//==========================================================================//
// progress bar //
var progress_circle = $(".my-progress-bar").css({
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

//==========================================================================//
// Firebase Auth //
var loggedIn = false;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("signed in: " + user.email);
        loggedIn = true;
        // User is signed in.
    } else {
        // No user is signed in.
        console.log("User has been signed out")
        loggedIn = false;
    }
});
$("#signInSubmit").on("click", function (event) {
    event.preventDefault()
    // console.log("Clicked");
    var user = firebase.auth().currentUser;
    if (loggedIn === true) {
        logout();
    } else {

    }
});

$("#signInSubmit").on("click", function (event) {
    event.preventDefault()
    signin();
})
function signin() {
    var loginUserNameInput = $("#loginUserNameInput").val().trim();
    var passwordInput = $("#loginPasswordInput").val().trim();
    // console.log("Before signin", emailInput);

    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
        .then(function (user) {
            console.log(user);
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // console.log("error: " + errorMessage);
        });
}
function logout() {
    firebase.auth().signOut().then(function () {

    }).catch(function (error) {
        console.log(error);
    });
}
// create new user //
function newUser() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        $("#signUpSubmitBtn").on("click", function () {
            var createUserNameInput = $("#createUserNameInput").val().trim();
            var firstNameInput = $("#firstNameInput").val().trim();
            var middleNameInput = $("#middleNameInput").val().trim();
            var lastNameInput = $("#lastNameInput").val().trim();
            var photoInput = $("#photoInput").val().trim();
            var ageInput = $("#ageInput").val().trim();
            var phoneInput = $("#phoneInput").val().trim();
            var emailInput = $("#emailInput").val().trim();
            var passwordInput = $("#passwordInput").val().trim();
        })
        // ...
        signin();
    });
}
// End of Firebase Auth //
//==========================================================================//

//==========================================================================//
// Logic - Functionality //

// On Submit for Creating a New Recommendation
$("#addChallenge").on("click", function(event) {
    event.preventDefault();

    var newRecommendation = {
        challenge_task: $("#challengeRecommendationInput").val().trim(),
        point_value: $("#pointValueInput").val().trim()
    };

    // Send POST Request
    $.ajax("/challenges/insert", {
        type: "POST",
        data: newRecommendation
    }).then(function() {
        console.log("Created New Recommendation!")
        location.reload();
    });
});

// End of Logic - Functionality //
//==========================================================================//