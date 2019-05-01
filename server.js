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
require("./routes/gym-routes.js")(app);
require("./routes/problem-routes.js")(app);
require("./routes/setter-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing models and then starting express app
model.sequelize.sync({ }).then( async () => {
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
        grade: "V3",
        color: "Green",
        wall: "East Wall",
        description: "While designed for a novice, this route is populated with smaller hand holds which will test grip strength. ",
        setDay: "11",
        setMonth: "04",
        photo: "https://i.pinimg.com/474x/3d/d5/ce/3dd5ceab37b156cb9b4c4c3233413aa9.jpg",
        GymId: gym.id,
        SetterId: setter.id
    });

    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT);
    });
});