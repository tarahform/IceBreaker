$(document).ready(function () {
    //==========================================================================//
    // AOS //
    AOS.init();
    // end of AOS //
    //==========================================================================//

    //==========================================================================//
    // Firebase Auth //

    // //this code creates and signs in a user everytime the app is run
    // console.log("test user");

    // const email = "testUser2@gmail.com";
    // const pass = "testUser2"
    // const auth = firebase.auth();
    // const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
    // promise.catch(e => console.log(e.message));

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

        // //this code creates and signs in a user everytime the app is run
        // console.log("test user");

        // const email = "testUser2@gmail.com";
        // const pass = "testUser2"
        // const auth = firebase.auth();
        // const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
        // promise.catch(e => console.log(e.message));
        
    // I think the reason this does'nt work is because newUser() is never called
    // function newUser() {
    //     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    //         $("#signUpSubmitBtn").on("click", function () {
    //             var createUserNameInput = $("#createUserNameInput").val().trim();
    //             var passwordInput = $("#passwordInput").val().trim();
    //         })
    //     }, function (error, userData) {
    //         if (error) {
    //             console.log("Error creating user:", error);
    //         } else {
    //             console.log("Successfully created user account with uid:", userData.uid);
    //         }
    //     });
    //     signin();
    // }

    //Sign Up On Click Function N.M.E.
    //In theory this should create a user using the entered email and password and sign them in automatically
    //It is basically the same code as the version that runs everytime the page refreshes, using an onClick function and JQuery
    $("#signUpSubmitBtn").on("click", function() {
        console.log("the function runs");
        const email = $("#createUserNameInput").val().trim();
        const password = $("#passwordInput").val().trim();
        const auth = firebase.auth();
        const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
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