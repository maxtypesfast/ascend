var model = require("../models");

module.exports = (app) => {
    app.get("/api/setters", (req, res) => {
        model.Setter.findAll({
            include: [model.Problem]
        }).then(setters => {
            res.render('results', {setters});
        });
    });

    // app.get("/api/setters/name/:name", (req, res) => {
    //     model.Setter.findOne({
    //         where: {
    //             name: req.params.name
    //         },
    //         include: [model.Problem]
    //     }).then(setters => {
    //         res.render('results', setters);
    //     });
    // });

    app.post("/api/setters", (req, res) => {
        model.Setter.create(req.body).then(setters => {
            res.json(setters);
        });
    });

    app.delete("/api/setter/:id", (req, res) => {
        model.Setter.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbSetter) => {
            res.json(dbSetter);
        });
    });
}