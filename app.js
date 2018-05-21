// Definitions
var express         = require('express');
var itemConroller   = require('./controllers/itemController');
var bodyParser      = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var app             = express();

// Configurations
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(urlencodedParser);

itemConroller(app);

// Run application
app.listen(3000, '127.0.0.1');
console.log('App running on port 3000');