var model = require("../models");

module.exports = (app) => {
    app.get("/api/problems", (req, res) => {
        model.Problem.findAll({
            include: [model.Gym, model.Setter]
        }).then(problems => {
            console.log(problems);
            res.render('results', {problems});
        });
    });

    app.get("/api/problems/grade/:grade", (req, res) => {
        model.Problem.findAll({
            where: {
                grade: req.params.grade
            },
            include: [model.Gym, model.Setter]
        }).then((dbProblem) => {
            console.log(dbProblem);
            res.json(dbProblem);
        });
    });

    app.get("/api/problems/color/:color", (req, res) => {
        model.Problem.findAll({
            where: {
                color: req.params.color
            },
            include: [model.Gym, model.Setter]
        }).then((dbProblem) => {
            console.log(dbProblem);
            res.json(dbProblem);
        });
    });

    app.post("/api/problems", (req, res) => {
        model.Problem.create(req.body).then((dbProblem) => {
            console.log(dbProblem);
            res.json(dbProblem);
        });
    });

    app.delete("/api/problem/:id", (req, res) => {
        model.Problem.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbProblem) => {
            console.log(dbProblem);
            res.json(dbProblem);
        });
    });
}; 