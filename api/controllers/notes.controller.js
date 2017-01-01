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

	Notes
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
				console.log(req.body);
				brother._id = req.body._id;
				brother.name = req.body.name;
				brother.number = req.body.number;
				brother.aka = req.body.aka;
				brother.className = req.body.className;
				brother.crossed = req.body.crossed;
				brother.family = req.body.family;

				console.log(brother);

				brother.save(function(err, noteUpdated) {
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

module.exports.brothersAddOne = function(req, res) {
	Note
		.create({
			_id : req.body._id,
			name : req.body.name,
			number : req.body.number,
			aka : req.body.aka,
			className : req.body.className,
			crossed : req.body.crossed,
			family : req.body.family
		}, function(err, brother) {
			if (err) {
				console.log("Error creating brother");
				res
					.status(400)
					.json(err);
			} else {
				console.log("Brother created", brother);
				res
					.status(201) // Created
					.json(brother);
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
				console.log("Note deleted, id:", brotherId);
				res
					.status(204)
					.json();
			}
		});
};