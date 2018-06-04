var db = require("../models");

module.exports = function(app) {
    app.get("/api", function(req, res) {
        res.sendFile(path.join(__dirname, "index"));
    });
}