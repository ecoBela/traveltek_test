const express = require('express');
const app = express();

const fs = require('fs');


fs.readFile('./db/flightdata_A.xml', (err, data) => {
    if(err){
        console.log('error')
    }
    console.log(data.toJSON());
});


app.get('/', function (req, res){
    // res.json({message: "Hello world!"});
});

app.listen(3000, function(){
    console.log('App is running on port 3000');
});