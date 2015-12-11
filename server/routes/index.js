var express = require('express');
var router = express.Router();

router.get('/test', function (req, res, next) {
    console.log('!!!!!!!!!!!!here!!!!!!!!!!!');
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;