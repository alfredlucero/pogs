var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
	date : {
		type : String,
		required : true
	},
	title : { 
		type : String,
		required : true
	},
	information : {
		type : String,
		required : true
	},
	tags : {
		type : String
	},
	location : {
		type : String
	},
	approxTime : {
		type : String
	},
	author : {
		type : String,
		required : true
	},
	icons : {
		type : [String]
	},
	archived : {
		type : Boolean,
		required : true
	}
});

// Model, ModelSchema, Collection 
mongoose.model('Note', noteSchema, 'notes');
