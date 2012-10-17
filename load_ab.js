/**
 * @author Benjamin Hitz
 */


data = {
	name : "SUZ12_(05-1317)",
	target : {
		name : "SUZ12",
		organism : "H. sapiens"
	},
	source : "Millipore",
	lot : "NRG1665726"
};

var mongoose = require('mongoose');
require('./models/antibody');
AntibodyModel = mongoose.model('Antibody');

mongoose.connect('mongodb://localhost/encode_dcc');

ab = new AntibodyModel(data);
ab.save();

console.log(ab);
mongoose.disconnect();


