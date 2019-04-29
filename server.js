// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Setting up express 
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring models for syncing
var model = require("./models");

// Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// See all the things in public
app.use(express.static("public"));
app.use(express.static("views"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes (not the climbing type -_0)
require("./routes/html-routes.js")(app);
require("./routes/gym-routes.js")(app);
require("./routes/problem-routes.js")(app);
require("./routes/setter-routes.js")(app);

// Syncing models and then starting express app
model.sequelize.sync({ force: true }).then( async () => {
    let gym = await model.Gym.create({
        name: "Gold's Gym",
        address: "1234 fake Street westwood, ca 56789",
        phone_number: "1234567891",
        website: "www.goldsgym.com"
    });

   let setter = await model.Setter.create({
        name: "John Setter",
        role: "Alpha mega setter",
        bio: "John setter is the best setter. Huge huge success."
    });

    model.Problem.create({
        grade: "V17",
        color: "Green",
        wall: "East Wall",
        description: "It's hard",
        setDay: "11",
        setMonth: "04",
        photo: "www.photoOfWall.com",
        GymId: gym.id,
        SetterId: setter.id
    });

    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT);
    });
});