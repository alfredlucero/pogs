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
		type : String,
		required : true
	},
	location : {
		type : String,
		required : true
	},
	approxTime : {
		type : String,
		required : true
	},
	author : {
		type : String,
		required : true
	},
	icons : {
		type : [String],
		required : true
	},
	archived : {
		type : Boolean,
		required : true
	}
});

// Model, ModelSchema, Collection 
mongoose.model('Note', noteSchema, 'notes');
