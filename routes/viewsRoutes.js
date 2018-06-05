module.exports = function (app) {
    app.get("/index", function (req, res) {
        var obj = {};
        res.render("index", obj);
    });
    app.get("/map", function (req, res) {
        var obj = {};
        res.render("map", obj);
    });
    app.get("/about", function (req, res) {
        var obj = {};
        res.render("about", obj);
    });
    app.get("/signin", function (req, res) {
        var obj = {};
        res.render("signin", obj);
    });
    app.get("/signup", function (req, res) {
        var obj = {};
        res.render("signup", obj);
    });
    app.get("/userprofile", function (req, res) {
        var obj = {};
        res.render("userprofile", obj);
    });
}