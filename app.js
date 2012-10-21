
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var mongoose = require('mongoose');

var routes = require('./routes');
var antibody = require('./routes/antibody');
var api = require('./api/api');

var tutorial2 = require('./routes/tutorial2');


var app = express();
mongoose.connect('mongodb://localhost/encode_dcc');

app.configure(function(){
  app.set('port', process.env.PORT || 3030);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('/antibody', antibody.index);
app.get('/tutorial2', tutorial2.index);

app.get('/api', function(req, res) { res.send('ENCODE Meta API is running'); });
app.get('/api/antibody', api.antibodies);
app.get('/api/antibody/:id', api.antibody);
app.put('/api/antibody/:id', api.update_antibody);
app.post('/api/antibody', api.create_antibody);
app.delete('/api/antibody/:id', api.delete_antibody);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
