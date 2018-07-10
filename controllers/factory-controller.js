var db = require('../models');
var exports = module.exports = {};

exports.newFactory = function (req, res) {
    db.Factories.create({
       facName: req.body.facName,
       id: req.body.id

    }).then(function (result) {
        res.redirect('/index');
    })
}

exports.getFactory = function (req, res) {
    console.log("HERE " + req.body.id);
    db.Factories.findAll({
        where: {
            id: 1,
        }
    }).then(function (result) {
        console.log(result);
        res.send(result);
    })
}

exports.burnFactory = function (req, res) {
    db.Factories.destroy({
        where: {
            id: req.body.id
        }
    }).then(function (result) {
        console.log(result);
        res.json(result);
    });
}

exports.updateFactory = function (req, res) {
    console.log("here " +req.body)

    db.Factories.update(
        req.body,
   
        {
            where: {
                id: req.body.id

            }
        }).then(function (results) {
            res.json(results);
        });
}