var express = require('express'),
    wines = require('./routes/employee'),
    jobs=require('./routes/job_posting');

var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.get('/employees/:id/reports', wines.findByManager);
app.get('/employees/:id', wines.findById);
app.get('/employees', wines.findAll);
app.get('/employees/:id/jobPosts',jobs.postedByUser);
app.post('/employees/:id/postJob',jobs.postJob);
app.get('/jobPosts', jobs.findAll);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
