var mongoose = require('mongoose');
var dbConString = require('../dbconnection').conString;

mongoose.connect(dbConString);

var itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;