var model = require("../models");

module.exports = (app) => {
    app.get("/api/gyms", (req, res) => {
        model.Gym.findAll({
            include: [{model: Problem}]
        }).then(gyms => {
            res.render('results', {gyms});
        });
    });

    app.get("/api/gyms/name/:name", (req, res) => {
        model.Gym.findOne({
            where: {
                name: req.body.name
            },
            include: [{model: Problem}]
        }).then(gyms => {
            res.render('results', {gyms});
        });
    });

    app.post("/api/gyms", (req, res) => {
        model.Gym.create(req.body).then(gyms => {
            res.json(gyms);
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