var mongoose = require('mongoose');
var dburl = (process.env.MONGODB_URI || 'mongodb://localhost:27017/pogsdb');

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dburl);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error: ' + dburl);
});

// For app termination
process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through app termination (SIGINT)');
		process.exit(0);
	});
});

// For Heroku app termination
process.on('SIGTERM', function() {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through app termination (SIGTERM)');
		process.exit(0);
	});
});

// For nodemon restarts
process.once('SIGUSR2', function() {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through app termination (SIGUSR2)');
		process.kill(process.pid, 'SIGUSR2');
	});
});

// Bring in schemas and models
require('./notes.model.js');