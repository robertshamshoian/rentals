var express = require('express');
var router = express.Router();
var Newclscrape    = require('../models/newclscrape');


//get the rental data from the server
router.get('/rentals', function(req, res) {
      Newclscrape.find({},{}, {limit : 200}, function(err, newclscrapes) {
        if (err) res.send(err);
        // return the scrape
        var rentals= {rentals: newclscrapes};
        res.json({data: rentals});
      });
});


module.exports = router;
