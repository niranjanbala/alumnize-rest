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
	    var id = parseInt(req.params.id);
	    db.collection('job_posting', function(err, collection) {
	        collection.findOne({'_id': id}, function(err, item) {
	            console.log(item);
	            res.jsonp(item);
	        });
	    });
};
exports.postedByUser = function(req, res) {
	    var postedByUserId = parseInt(req.params.id);
	    db.collection('job_posting', function(err, collection) {
	            collection.find(
						{
							"postedb.id": postedByUserId
						}
				).toArray(function(err, items) {
	                res.jsonp(items);
	            });
	    });
};
exports.postJob = function(req, res) {
		var id = parseInt(req.params.id);
		var employees = [
				req.body
		  ];
		db.collection('job_posting', function(err, collection) {
		        collection.insert(employees, {safe:true}, function(err, result) {
					console.log(result);
				});
		});
	    res.jsonp(employees[0]);
};
exports.findAll = function(req, res) {
	    var title = req.query["title"];
	    var description = req.query["description"];
	    var company = req.query["description"];
	    var userId = parseInt(req.params.id);
	    console.log(title);
	    console.log(description);
	    console.log(company);
	    console.log(userId);
		res.jsonp({});
};