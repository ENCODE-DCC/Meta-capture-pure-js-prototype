
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

exports.update_antibody = function(req,res) {
  return AntibodyModel.findById(req.params.id, function (err, antibody) {
  	antibody.name = req.body.name;
  	antibody.target = req.body.target;
  	antibody.source = req.body.source;
  	antibody.lot_id = req.body.lot_id;
  	antibody.product_id = req.body.lot_id;
  	antibody.valdiation_documents = req.body.validation_documents;
     return antibody.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(antibody);
    });
  });	
};

exports.create_antibody = function(req,res) {
  var antibody;
  console.log("POST: ");
  console.log(req.body);
  antibody = new AntibodyModel({
 	name: req.body.name,
  	target: req.body.target,
  	source: req.body.source,
  	lot_id: req.body.lot_id,
  	product_id: req.body.lot_id,
  	valdiation_documents: req.body.validation_documents
  }
  );
  antibody.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(antibody);

};
