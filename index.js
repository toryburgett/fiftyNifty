var express = require("express");
var app = express();
var bodyParser   = require('body-parser');
var env          = require("./env");
var path         = require("path");


var d3 = require("d3"),
    jsdom = require("jsdom");

var document = jsdom.jsdom(),
    svg = d3.select(document.body).append("svg");



app.use(express.static(path.join(__dirname, "/public")));

var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});
