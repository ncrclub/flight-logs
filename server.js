const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));

const charts = require('./lib/ncr_charts.js');
// var http = require('http');

app.get('/charts/flights/by/flyer', function(req, res) {
    // controller.topFlyers(req, res);
    charts.chartFlightsByFlyers(req.query.year, req.query.height, req.query.width, res)
})

app.get('/charts/flights/by/month', function(req, res) {
    // controller.topFlyers(req, res);
    charts.chartFlightsByMonth(req.query.year, req.query.height, req.query.width, res)
})

app.listen(8081);
console.log('ready')
