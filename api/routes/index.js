var express = require('express');
var router = express.Router();

var ctrlNotes = require('../controllers/notes.controller.js');
var ctrlUsers = require('../controllers/users.controller.js');

// Notes routes
router
	.route('/notes')
	.get(ctrlNotes.notesGetAll)
	.post(ctrlNotes.notesAddOne);

router
	.route('/notes/:noteId')
	.get(ctrlNotes.notesGetOne)
	.put(ctrlNotes.notesUpdateOne)
	.delete(ctrlNotes.notesDeleteOne);

// Authentication
router
	.route('/users/register')
	.post(ctrlUsers.register);

router
	.route('/users/login')
	.post(ctrlUsers.login);

module.exports = router;