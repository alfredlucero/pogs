var express = require('express');
var router = express.Router();

var ctrlNotes = require('../controllers/notes.controller.js');

// Brother routes
router
	.route('/notes')
	.get(ctrlBrothers.brothersGetAll)
	.post(ctrlBrothers.brothersAddOne);

router
	.route('/brothers/:brotherId')
	.get(ctrlBrothers.brothersGetOne)
	.put(ctrlBrothers.brothersUpdateOne)
	.delete(ctrlBrothers.brothersDeleteOne);

module.exports = router;