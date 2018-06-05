var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var app = express();
var db = require("./models");
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
require("./routes/apiroutes")(app);
require("./routes/viewsRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    db.sequelize.sync().then(function () {
        console.log("DATABASE IS CONNECTED!");
    });
});