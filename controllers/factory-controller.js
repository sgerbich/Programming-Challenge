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
    console.log("HERE " + req.user.id);
    db.Factories.findAll({
        where: {
            id: req.user.id,
        }
    }).then(function (result) {
        console.log(result);
        res.send(result);
    })
}

