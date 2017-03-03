
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
// Example route
// var user = require('./routes/user');

// below added by tommy
var login = require('./routes/login');
var requests = require('./routes/requests');
var index = require('./routes/index');
var profile = require('./routes/profile');
var friends = require('./routes/friends');
var hideMatch = require('./routes/hideMatch');
var showConnectionRequest = require('./routes/showConnectionRequest');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
// Example route
// app.get('/users', user.list);

//below added by tommy
app.get('/login', login.view);
app.get('/requests', requests.view);
app.get('/index', index.view);
app.get('/profile', profile.view);
app.get('/friends', friends.view);

//write JSON data (Added by Tommy 2/28):
//app.post('/requests/:id', requests.declineRequest);
app.get('/hideMatch', hideMatch.view);
app.get('/showConnectionRequest', showConnectionRequest.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


















