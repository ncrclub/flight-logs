var request = require('request')
var charts = require('./lib/ncr_charts.js')
/*
request({
    url: url,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
    res.send(body)
})
*/

exports.topFlyers = function(req, res) {
    charts.chartFlightsByFlyers(2007, "chart1", res)
    //res.write(openHtml())
    //res.write(canvasHtml("myChart", 40, 200));
    //res.write(jsInclude("https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"))
    //res.write(jsInclude("https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.bundle.min.js"))
    //chartScript("myChart", res);
}

function canvasHtml(id, height, width) {
    return '<canvas id="'+ id +'" width="'+ width +'" height="'+ height +'"></canvas>';
}

function openHtml() {
    return '<!DOCTYPE html><html><head>' + pageHeaders() + '</head><body>';
}

function pageHeaders() {
    return cssInclude("https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.css")
}

function jsInclude(script) {
    return '<script src="'+ script +'"></script>';
}

function cssInclude(script) {
    return '<link rel="stylesheet" href="'+ script +'">';
}

function closeHtml() {
    return '</body></html>';
}

function chartScript(id, html) {
    var url = "https://ncrocketry.club/flight/api/v1/charts/flights/by/flyer/2007"

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        // if (!error && response.statusCode === 200) { }

        html.write(buildChart(id, body))
        html.write(closeHtml())
        html.end();
    })

}





