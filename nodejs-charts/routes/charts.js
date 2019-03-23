var express = require('express');
var router = express.Router();
const charts = require('../lib/ncr_charts.js');

router.get('/flights/by/flyer', function(req, res, next) {
    charts.chartFlightsByFlyers(req.query.year, req.query.height, req.query.width, res)
})

router.get('/flights/by/month', function(req, res, next) {
    charts.chartFlightsByMonth(req.query.year, req.query.height, req.query.width, res)
})

module.exports = router;
