var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/app'));

app.listen(4000);
