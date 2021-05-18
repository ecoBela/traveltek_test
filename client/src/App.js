import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
//const [flightWithMostStops, setFlightWithMostStops] = useState();
//const [dayWtihMostDeparturesManchester, setDayWithMostDeparturesManchester] = useState();
//const [noOfDiffFlightsOnMon] = useState();
//const [noOfDiffFlightsOnTues] = useState();
//const [noOfDiffFlightsOnWed] = useState();
//const [noOfDiffFlightsOnThurs] = useState();
//const [noOfDiffFlightsOnFri] = useState();
//const [noOfDiffFlightsOnSat] = useState();
//const [noOfDiffFlightsOnSun] = useState();
//const [propOfBusinessFlights, setPropOfBusinessFlights] - useState();
//const [interestingStat, setInterestingStat] = useState();

//FETCH your data - once it all works - swap TEST data file with the FULL DATA set****
const AllFlightData = function(){
  console.log("getting data...")
  fetch('http://localhost:3000/flights')
  .then(response => response.json())
  .then(data =>console.log(data))
}

// getAllFlightData();
//USE effect to fetch the data on load
useEffect(() => {
  AllFlightData()
}, [])


//1. function to find flight with most stops
//2. function to find day with most departures from Manchester

const findDayWithMostDepManchester = function(){
const depMon = []
const depTue =[]
const depWed =[]
const depThur =[]
const depFri = []
const depSat =[]
const depSun = []

AllFlightData.forEach(flight => {
  if(flight.$.depair === 'MAN'){
    const depDate = new Date(flight.$.outdepartdate);
//then look for the day and push object into correct day array
  }
  if(flight.segments.segment.$.depcode === 'MAN'
  && flight.segments.segment.$.journey === 'out'){
    //then look for the day and push this object into day array
  }
  
});


//for each flight object in array, if $.depair === MAN  (and check it's an 'out' not 'in')

//then store departure date as a new Date object
//find the date that it equates to and store that in a variable
//if the day is monday then put it in monday array, if tues etc
//count length of each array
//console.log the day with the most departures


}



//3. number of different flights on each day of the week: mon, tues etc
//4. function to find proportion of flights that are business class
//5. function to find one other interesting stat


  return (
    <div className="App">
      <h1>Dashboard</h1>
      <p>Which flight has the most stops? [INSERT {}] </p>
      <p>Day with most departures from Manchester (MAN): </p>
      <p>How many different flight numbers on Monday: {}, Tuesday: {}, Wednesday: {}, Thursday: {}, Friday: {}, Saturday: {}, Sunday: {}</p>
      <p>Which proportion of the flights are business class?</p>
      <p>One other interesting statistic: {}</p>

    </div>
  );
}

export default App;
