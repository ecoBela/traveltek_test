const express = require('express');
const app = express();

// var parseString = require('xml2js').parseString;

var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();

const flightResults = [];

fs.readFile('/Users/belahamid/post_codeclan/traveltek/traveltek_challenge/server/db/test_data.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result.flights.flight);
        console.log('Done');
        flightResults.push(result);
        
    });
});


app.get('/', function(req, res){
    // res.send({ message: "Hello World!" });
    res.send({flightResults})

});

app.get('/flights', function(req, res){
    res.send({message: "Flight stats"});
});

app.listen(3000, function(){
    console.log('App is running on port 3000');
});