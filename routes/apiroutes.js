var db = require("../models");

module.exports = function (app) {
    //get data from users table
    app.get("/api/users", function (req, res) {
        db.User.findAll({}).then(function (data) {
            res.json(data);
        });
    });

    //post data to users table
    app.post("/api/users", function (req, res) {
        db.User.create({
            first_name: req.body.first_name,
            middle_name: req.body.middle_name,
            last_name: req.body.last_name,
            photo_link: req.body.photo_link,
            email: req.body.email,
            phone_number: req.body.phone_number,
            age: req.body.age,
            member_since: req.body.member_since,
            challenge_id: req.body.challenge_id,
            user_points: req.body.user_points,
        }).then(function (data) {
            res.json(data);
        });
    });

    //get user challenge_ids
    // app.get("api/users/challengeId", function(req, res){
    //     db.User.findAll({
    //         where: {

    //         }
    //     });
    // });

    //get data from challenges table
    app.get("/api/challenges", function (req, res) {
        db.Challenge.findAll({}).then(function (data) {
            res.json(data);
        });
    });

    //post data to challenges table
    app.post("/api/users", function (req, res) {
        db.User.create({
            challenge_task: req.body.challenge_task,
            point_value: req.body.point_value,
        }).then(function (data) {
            res.json(data);
        });
    });


}