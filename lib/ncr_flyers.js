const http = require("request");

exports.all = function (res) {
    var url = "https://ncrocketry.club/flight/api/v1/flyers/flights/by/flyer/"+ year

    http({ url: url, json: true, contentType: "application/json" },
        function (error, response, json) {
            if (error) {
                console.log(error);
            } else {
                return json
            }
        }
    )
}

exports.chartFlightsByYear = function (year, id, res) {
    var url = "https://ncrocketry.club/flight/api/v1/charts/flights/by/month/"+ year

    http({ url: url, json: true, contentType: "application/json" },
        function (error, response, json) {
            if (error) {
                console.log(error);
            } else {
                res.render("index", {chart: json});
            }
        }
    )
}
