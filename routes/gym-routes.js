var model = require("../models");

module.exports = (app) => {
    app.get("/api/gyms", (req, res) => {
        model.Gym.findAll({
            include: [model.Problem]
        }).then((dbGym) => {
            res.json(dbGym);
        });
    });

    app.get("/api/gyms/:name", (req, res) => {
        model.Gym.findOne({
            where: {
                name: req.params.name
            },
            include: [model.Problem]
        }).then((dbGym) =>{
            res.json(dbGym);
        });
    });

    app.post("/api/gyms", (req, res) => {
        model.Gym.create(req.body).then((dbGym) => {
            res.json(dbGym);
        });
    });

    app.delete("/api/gyms/:id", (req, res) => {
        model.Gym.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbGym) => {
            res.json(dbGym);
        });
    });

}