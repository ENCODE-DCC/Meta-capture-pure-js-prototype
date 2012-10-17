
var mongoose = require('mongoose');
require('../models/antibody')
var AntibodyModel = mongoose.model('Antibody')


exports.antibodies = function (req, res) {
  return AntibodyModel.find(function (err, antibodies) {
    if (!err) {
      return res.send(antibodies);
    } else {
      return console.log(err);
    }
  });
};


exports.antibody = function (req, res) {
  return AntibodyModel.findById(req.params.id, function (err, antibody) {
    if (!err) {
      return res.send(antibody);
    } else {
      return console.log(err);
    }
  });
};

