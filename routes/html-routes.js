var path = require("path");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "index.html"));
    });
    
    // Address placeholder.html
    app.get("/search", (req, res) => {
        res.sendFile(path.join(__dirname, "placeholder.html"));
    });
}