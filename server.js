var express = require('express');
var bodyParser = require('bod-parser');

var app = expres();
var port = process.env.PORT || 3000;

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.listen(port);

console.log('Listening to port  ', port);
