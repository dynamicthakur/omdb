var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');


var app = express();

// express middlewares
app.use(logger('dev'));
app.use(express.json()); //parse the body of the request
app.use(express.urlencoded({ extended: false })); // parse the url or the request
app.use(cookieParser()); // parse the cookie
app.use(express.static(__dirname + '/public')); // static folder path to server files
// __dirname -> node global variable gives path of file

var usersRouter = require('./routes/users');
app.use('/users', usersRouter);


const omdbRouter = require('./routes/omdb');
app.use('/omdb',omdbRouter);
module.exports = app;
