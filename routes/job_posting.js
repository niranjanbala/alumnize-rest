var MongoClient = require('mongodb').MongoClient,db;
	MongoClient.connect("mongodb://heroku_app17819681:rhnmk5dv8hcg0ppbq35kav284l@ds043338.mongolab.com:43338/heroku_app17819681",
	function(err, mDb) {
		 db=mDb;
	});
exports.findById = function(req, res) {

};
exports.postedByUser = function(req, res) {
	res.jsonp({});
};
exports.postJob = function(req, res) {

};
exports.findAll = function(req, res) {

};

