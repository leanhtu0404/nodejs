## tula test lan 2 ##
var express = require ('express');
var app = express();
app.get('/contact', function (req, res) {
    res.send('hello');
});
app.listen(3000, function () {
    console.log('App listening on port 3000');
});
