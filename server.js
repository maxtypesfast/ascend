// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Setting up express 
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring models for syncing
var db = require("./models");

// Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// See all the things in public
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes (not the climbing type -_0)
require("./routes/html-routes.js")(app);
require("./routes/gym-routes.js")(app);
require("./routes/problem-routes.js")(app);
require("./routes/setter-routes.js")(app);

// Syncing models and then starting express app
db.sequelize.sync({}).then( () => {
    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT);
    });
});