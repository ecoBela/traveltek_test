const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// var parseString = require('xml2js').parseString;

const fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();

const allFlights = [];

fs.readFile('/Users/belahamid/post_codeclan/traveltek/traveltek_challenge/server/db/flightdata_A.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result.flights.flight);
        
        allFlights.push(result.flights.flight);
        console.log('All done');
        
    });
});


app.get('/', function(req, res){
    res.send({allFlights})

});

app.get('/flights', function(req, res){
    res.send({allFlights});
});

app.listen(3000, function(){
    console.log('App is running on port 3000');
});