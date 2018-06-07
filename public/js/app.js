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

    // "OnSubmit" for Creating a New Recommendation
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

    // Challenge Complete "OnClick" To Show Modal
    $(".challengeCompleteButton").on("click", function () {
        var challengeId = $(this).data("id")
        var pointsAdded = $(this).data("point_value")

        $("#complete").data("id", challengeId)
        $("#complete").data("point_value", pointsAdded);

        $(".completedChallengeId").text(challengeId);
        $(".completeChallengeeModal").modal();
    });

    // Complete Button "OnClick" to Verify Challenge Complete
    // If Not Complete, Add Challenge# To Array in DB
    // Take To User Profile With Updated Points
    // If Already Complete, Notify Already Done
    $("#complete").on("click", function () {

        $.ajax("/api/users/1", {
            type: "GET"
        }).then(function (data) {
            console.log(data)
            var completedChallengesArray = JSON.parse(data[0].challenge_id)
            console.log("completed challenge array: ", completedChallengesArray);

            var challengeId = $("#complete").data("id")
            console.log("challenge id from button: ", challengeId)

            var userPoints = data[0].user_points
            console.log("user points: ", userPoints)

            var pointsAdded = $("#complete").data("point_value");
            console.log("points from challenge: ", pointsAdded)

            var inArrayCheck = $.inArray(challengeId, completedChallengesArray);
            if (inArrayCheck === -1) {

                (completedChallengesArray).push(challengeId)
                console.log("push to array", challengeId);

                var completedChallengesArray = JSON.stringify(completedChallengesArray);
                console.log(completedChallengesArray);

                //update points here
                var updatedPoints = parseInt(userPoints) + parseInt(pointsAdded)
                console.log(updatedPoints)

                return { completedChallengesArray, updatedPoints };
            } else if (inArrayCheck != -1) {
                return false;
            }
        }).then(function (data) {
            if (data) {
                return $.ajax("/api/users/1", {
                    type: "PUT",
                    data: data
                })
            } else {
                return false
            }
        }).then(function (data) {
            if (data) {
                console.log("changed array to: ", data);
            } else {
                console.log("you've already completed this challenge")
                alert("You have already completed this challenge!")
            }
        })
    })

    // End of Logic - Functionality //
    //==========================================================================//
});