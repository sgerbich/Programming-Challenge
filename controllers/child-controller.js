var db = require('../models');
var exports = module.exports = {};

exports.newChild = function (req, res) {
    db.Children.create({
       value: req.body.value
    }).then(function (result) {
        res.redirect('/index');
    })
}

exports.getChild = function (req, res) {
    console.log("HERE " + req.body.FactoryId);
    db.Children.findAll({
        
    }).then(function (result) {
        console.log(result);
        res.send(result);
    })
}
