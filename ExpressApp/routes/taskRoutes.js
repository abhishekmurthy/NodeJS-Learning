var express = require('express');
var router = express.Router();

var tasks = [
    {id : 1, name : 'Watch a movie', isCompleted : 'false'},
    {id : 2, name : 'Explore the city', isCompleted : 'true'}
];

router.get('/', function(req, res, next) {
    res.write('All tasks will be displayed here');
    res.end();
});

module.exports = router;
