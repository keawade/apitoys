var express = require('express');
var http = require('http');
var twitter = require('twitter');
var github = require('github');
var config = require('./config');

var app = express();
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.send('index.html');
});

var twit = new twitter({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    access_token_key: config.accessTokenKey,
    access_token_secret: config.accessTokenSecret
});

twit.stream('filter', { track: 'cat' }, function (stream) {
    stream.on('data', function (data) {
        console.log('Tweet received from ' + data.user.screen_name + ': "' + data.text + '"');
    });
});

var server = app.listen(8001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("[apitoys] listening at http://%s%s", host, port);
});
