var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports.notesGetAll = function(req, res) {
	Note
		.find()
		.exec(function(err, notes) {
			if (err) {
				console.log("Error finding notes");
				res
					.status(500)
					.json(err);
			} else {
				console.log("Found notes", notes.length);
				res
					.json(notes);
			}
		});
};

module.exports.notesGetOne = function(req, res) {
	var noteId = req.params.noteId;
	console.log("GET noteId", noteId);

	Note
		.findById(noteId)
		.exec(function(err, note) {
			var response = {
				status : 200,
				message : note
			};

			if (err) {
				console.log("Error finding notes");
				response.status = 500;
				response.message = err;
			} else if (!note) {
				response.status = 404;
				response.message = {
					"message" : "Note ID not found"
				};
			}

			res
				.status(response.status)
				.json(response.message);
		});
};

module.exports.notesUpdateOne = function(req, res) {
	var noteId = req.params.noteId;
	console.log("PUT noteId", noteId);

	Note
		.findById(noteId)
		.exec(function(err, note) {
			var response = {
				status : 200,
				message : note
			};

			if (err) {
				console.log("Error finding notes");
				response.status = 500;
				response.message = err;
			} else if (!note) {
				response.status = 404;
				response.message = {
					"message" : "Note ID not found"
				};
			}

			if (response.status !== 200) {
				res
					.status(response.status)
					.json(response.message);
			} else {
				//console.log(req.body);
				note.date = req.body.date;
				note.title = req.body.title;
				note.information = req.body.information;
				note.tags = req.body.tags;
				note.location = req.body.location;
				note.approxTime = req.body.approxTime;
				note.author = req.body.author;
				note.icons = req.body.icons;
				note.archived = req.body.archived;

				//console.log(note);

				note.save(function(err, noteUpdated) {
					if (err) {
						res
							.status(500)
							.json(err);
					} else {
						res
							.status(204) // saved successfully
							.json();
					}
				});
			}

		});
};

module.exports.notesAddOne = function(req, res) {
	Note
		.create({
			date : req.body.date,
			title : req.body.title,
			information : req.body.information,
			tags : req.body.tags,
			location : req.body.location,
			approxTime : req.body.approxTime,
			author : req.body.author,
			icons : req.body.icons,
			archived : req.body.archived
		}, function(err, note) {
			if (err) {
				console.log("Error creating note");
				res
					.status(400)
					.json(err);
			} else {
				console.log("Note created", note);
				res
					.status(201) // Created
					.json(note);
			}
		});
};

module.exports.notesDeleteOne = function(req, res) {
	var noteId = req.params.noteId;

	Note
		.findByIdAndRemove(noteId)
		.exec(function(err, note) {
			if (err) {
				res
					.status(404)
					.json(err);
			} else {
				console.log("Note deleted, id:", noteId);
				res
					.status(204)
					.json();
			}
		});
};