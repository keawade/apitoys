var express = require('express'),
    http = require('http');

var app = express();
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.send('index.html');
});

var server = app.listen(8001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("[apitoys] listening at http://%s%s", host, port);
});
