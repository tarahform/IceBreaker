$(document).ready(function () {
    //==========================================================================//
    // AOS //
    AOS.init();
    // end of AOS //
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
            $("#signUpSubmitBtn").on("click", function () {
                var createUserNameInput = $("#createUserNameInput").val().trim();
                var passwordInput = $("#passwordInput").val().trim();
            })
        }, function (error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });
        signin();
    }

    var userName, emailAddress, password;

    var ref = new Firebase("https://icebreaker-6e876.firebaseio.com/");
    ref.createUser({
        email: emailAddress,
        password: password
    }, function (error, authData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            // save the user's profile into the database so we can list users,
            // use them in Security and Firebase Rules, and show profiles
            ref.child("users").child(authData.uid).set({
                provider: authData.provider,
                name: userName
            });
        }
    });

    // End of Firebase Auth //
    //==========================================================================//


    //==========================================================================//
    // Logic - Functionality //
    // On Submit for Creating a New Recommendation
    $("#create-form").on("submit", function (event) {
        event.preventDefault();

        var newRecommendation = {
            challenge_task: $("#challengeRecommendationInput").val().trim(),
            point_value: $("#pointValueInput").val().trim()
        };

        // Send POST Request
        $.ajax("/challenges/insert", {
            type: "POST",
            data: newRecommendation
        }).then(function () {
            console.log("Created New Recommendation!")
            location.reload();
        });
    });
    // End of Logic - Functionality //
    //==========================================================================//
});