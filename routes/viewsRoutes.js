module.exports = function (app) {
    app.get("/", function (req, res) {
        var bios = {};
        res.render("index", bios);
    });
}