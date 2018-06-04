module.exports = function (app) {
    app.get("/", function (req, res) {
        var bios = { anything: "anything" };
        res.render("index", bios);
    });
}