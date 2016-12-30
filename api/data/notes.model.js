var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
	author : {
		type : String,
		required : true
	},
	title : { 
		type : String,
		required : true
	},
	description : {
		type : String,
		required : true
	},
	date : { 
		type : Date,
		default : Date.now
	},
	comments : {
		type : [String]
	}
});

// Model, ModelSchema, Collection 
mongoose.model('Note', noteSchema, 'notes');
