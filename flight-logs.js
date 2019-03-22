//Load express module with `require` directive
var express = require('express')
var request = require('request')
var controller = require('./controller.js');
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
    controller.topFlyers(req, res);
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})
