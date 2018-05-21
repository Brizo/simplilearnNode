var Item = require('../models/itemModel');

module.exports =  function(app){
    // home page
    app.get('/', function(req, resp){
        Item.find({}).distinct('category', function(error, categories) {
            Item.find({}, function(err, data){
                if (err) throw err;
                resp.render('items',{items:data, categories:categories});
            });
        });
    });

    // retrieve items belonging to category
    app.get('/items/:category', function(req, resp){
        var retrievedCat = req.params.category;
        Item.find({}).distinct('category', function(error, categories) {
            Item.find({category:retrievedCat}, function(err, items){
                if (err) throw err;
                resp.render('items',{items:items, categories:categories});
            });
        });
    });

    // post from administrator
    app.post('/items', function(req, resp){
        var item = new Item(req.body);
        item.save(function(err, data){
            if (err) throw err;
            resp.redirect('/');
        });
    });

    // send add item form page
    app.get('/admin', function(req, resp){
        resp.render('admin');
    });

    // send checkout page
    app.get('/checkout', function(req, resp){
        resp.render('checkout',{});
    });
}