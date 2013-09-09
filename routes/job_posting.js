var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    db;
var userName="heroku_app17819681";
var password="rhnmk5dv8hcg0ppbq35kav284l";
var hostName="ds043338.mongolab.com"
var port="43338";
var dbName="heroku_app17819681";
var mongoClient = new MongoClient(new Server(hostName, port));

MongoClient.connect("mongodb://heroku_app17819681:rhnmk5dv8hcg0ppbq35kav284l@ds043338.mongolab.com:43338/heroku_app17819681", function(err, mDb) {
    db=mDb;
});
exports.findById = function(req, res) {
	    console.log(req.params);
	    var id = parseInt(req.params.id);
	    console.log('findById: ' + id);
	    db.collection('employees', function(err, collection) {
	        collection.findOne({'id': id}, function(err, item) {
	            console.log(item);
	            res.jsonp(item);
	        });
	    });
};
exports.postedByUser = function(req, res) {
	    console.log(req.params);
	    var id = parseInt(req.params.id);
	    console.log('findById: ' + id);
	    db.collection('employees', function(err, collection) {
	        collection.findOne({'id': id}, function(err, item) {
	            console.log(item);
	            res.jsonp(item);
	        });
	    });
};
exports.postJob = function(req, res) {
	    var id = parseInt(req.params.id);
	    console.log('request =' + JSON.stringify(req.body))
	    db.collection('employees', function(err, collection) {
	        collection.findOne({'id': id}, function(err, item) {
	            res.jsonp(item);
	        });
	    });
};
exports.findAll = function(req, res) {

};