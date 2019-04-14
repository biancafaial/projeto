var express = require('express');
var application = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

application.set('view engine','ejs');
application.set('views','./views');
application.use(express.static('./public'));
application.use(bodyParser.urlencoded({extended : true}));
application.use(expressValidator());
application.use(expressSession({
    secret : 'abc',
    resave : false,
    saveUninitialized : false 
}));

consign()
.include('./routes')
.into(application);


module.exports = application;
