var MongoClient = require('mongodb').MongoClient;
var dburl = (process.env.MONGODB_URI || 'mongodb://localhost:27017/pogsdb');

var _connection = null;

var open = function() {
	MongoClient.connect(dburl, function(err, db) {
		if (err) {
			console.log("DB connection failed");
			return;
		}
		_connection = db;
		console.log("DB connection open", db);
	});
	// set _connection
};

var get = function() {
	return _connection;
};

module.exports = {
	open: open,
	get: get
};

