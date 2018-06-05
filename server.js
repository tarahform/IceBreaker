var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
require("./routes/apiRoutes")(app);
require("./routes/viewsRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    db.sequelize.sync().then(function () {
        console.log("DATABASE IS CONNECTED!");
    });
});