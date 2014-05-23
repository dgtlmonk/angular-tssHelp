var express = require('express');
var routes = require('./routes');
var path = require('path');
var Mincer = require('mincer');

var assets_env = new Mincer.Environment();
    assets_env.appendPath('assets/app');
    assets_env.appendPath('assets/css');
    assets_env.appendPath('assets/js');

var connect_assets = require('connect-assets');
var app_assets = require('connect-assets');
    app_assets.paths = ["app/"];


var app = express();

// environment setup
var port = process.env.PORT || 9000;
app.use(express.static(__dirname + '/public')); // static files location
app.use(express.static(__dirname + '/src')); // static files location
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(connect_assets());
app.use(app_assets());
// app.use('/assets',Mincer.createServer(assets_env));

// var router = express.Router();

// app.get('/', routes.index);
app.get('/', function (req, res){
 res.render ('index',{ title: 'TSS HELP CENTER'});
});

app.listen(port);
console.log(' ----- Started app at port ' + port);


