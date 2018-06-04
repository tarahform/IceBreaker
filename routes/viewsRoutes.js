module.exports = function (app) {
    app.get("/bios", function (req, res) {
        var bios = {};
        res.render("index", bios);
    });
}