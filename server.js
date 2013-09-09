var express = require('express'),
    path = require('path'),
    http = require('http'),
    wines = require('./routes/employee'),
    jobs=require('./routes/job_posting');
var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'views')));
});

app.get('/employees/:id/reports', wines.findByManager);
app.get('/employees/:id', wines.findById);
app.get('/employees', wines.findAll);
app.get('/employees/:id/jobPosts',jobs.postedByUser);
app.post('/employees/:id/postJob',jobs.postJob);
app.get('/employees/:id/searchJobs', jobs.findAll);
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});