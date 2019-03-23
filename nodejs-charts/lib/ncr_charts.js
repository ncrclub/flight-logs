const http = require("request");

exports.chartFlightsByFlyers = function (year, height, width, res) {
    if (!height) { height = 100; }
    if (!width) { width = 350; }
    var url = "https://ncrocketry.club/flight/api/v1/charts/flights/by/flyer/"+ year

    http({ url: url, json: true, contentType: "application/json" },
        function (error, response, json) {
            if (error) {
                console.log(error);
            } else {
                res.render("chart", {id: "flights_by_flyer", height: height, width: width, chart: json, title: year +" Flights - Top 30 Flyers"});
            }
        }
    )
}

exports.chartFlightsByMonth = function (year, height, width, res) {
    if (!height) { height = 100; }
    if (!width) { width = 350; }
    var url = "https://ncrocketry.club/flight/api/v1/charts/flights/by/month/"+ year

    http({ url: url, json: true, contentType: "application/json" },
        function (error, response, json) {
            if (error) {
                console.log(error);
            } else {
                res.render("chart", {id: "flights_by_month", height: height, width: width, chart: json, title: year +" Flights by Month"});
            }
        }
    )
}
