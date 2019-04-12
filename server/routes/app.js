
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'templeTracker' });
    // res.sendFile(path.join(__dirname, 'dist/templeTracker/index.html'));
});

module.exports = router;


