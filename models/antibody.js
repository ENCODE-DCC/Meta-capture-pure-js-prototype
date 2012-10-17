/**
 * @author Benjamin Hitz
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var AntibodySchema = new Schema({
	name: { type: String, unique: true },
	target: { 
		name: String,
		organism: String
	},
	source: String,
	product_id: String,
	lot_id: String,
	validation_documents: [Buffer]
});

mongoose.model('Antibody', AntibodySchema);