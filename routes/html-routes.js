var path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("index");
    });
    
    // Address placeholder.html
    app.get("/results", (req, res) => {
        res.render("results");
    });
}