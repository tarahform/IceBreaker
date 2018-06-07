$(document).ready(function () {
    //==========================================================================//
    // AOS //
    AOS.init();
    // end of AOS //
    //==========================================================================//

    //==========================================================================//
    // Firebase Auth //

    $("#signUpForm").on("submit", function (event) {
        event.preventDefault();
        var newUser = {
            first_name: $("#firstNameInput").val().trim(),
            middle_name: $("#middleNameInput").val().trim(),
            last_name: $("#lastNameInput").val().trim(),
            email: $("#emailInput").val().trim(),
            phone_number: $("#phoneInput").val().trim(),
            age: $("#ageInput").val().trim(),
            challenge_id: "[]",
            user_points: 0
        }
        var userName = $("#createUserNameInput").val().trim();
        var password = $("#passwordInput").val().trim();
        // console.log(newUser);

        firebase.auth().createUserWithEmailAndPassword(newUser.email, password)
            .then(function () {
                console.log("adding new user to database");
                return $.ajax({
                    type: "POST",
                    url: "/api/users",
                    data: newUser
                })
            }).then(function (res) {
                console.log("Response", res);
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error", error);

                // ...
                console.log("ERROR MAKING COUNT");
                console.log(errorCode);
                console.log(errorMessage);



            });
    });

    $("#signOut").on("click", function () {
        firebase.auth().signOut().then(function () {
            console.log("Sign Out Successful");
        }).catch(function (error) {
            console.log(error);
        });
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