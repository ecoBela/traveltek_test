import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

const [allFlights, setAllFlights] = useState([]);
const [mondayFlightsManchester, setMondayFlightsManchester] = useState(0); 
const [tuesdayFlightsManchester, setTuesdayFlightsManchester] = useState(0); 
const [wednesdayFlightsManchester, setWednesdayFlightsManchester] = useState(0); 
const [thursdayFlightsManchester, setThursdayFlightsManchester] = useState(0); 
const [fridayFlightsManchester, setFridayFlightsManchester] = useState(0); 
const [saturdayFlightsManchester, setSaturdayFlightsManchester] = useState(0); 
const [sundayFlightsManchester, setSundayFlightsManchester] = useState(0); 



const getAllFlightData = function(){
  console.log("getting data...")
  fetch('http://localhost:3000/flights')
  .then(response => response.json())
  .then(data =>setAllFlights(data))
}


useEffect(() => {
  getAllFlightData()
}, [])


//2. function to find day with most departures from Manchester
const depMon = []
const depTue =[]
const depWed =[]
const depThur =[]
const depFri = []
const depSat =[]
const depSun = []

const findDayWithMostDepManchester = function(){

allFlights.allFlights[0].forEach(flight => {

  if(flight['$'].depair === 'MAN'){
    const depDate = new Date(flight.$.outdepartdate);
    const depDay = depDate.getDay();
    if(depDay === 0){
      depSun.push(flight)
    }
    if(depDay ===1){
      depMon.push(flight)
    }
    if(depDay === 2){
      depTue.push(flight)
    }
    if(depDay ===3){
      depWed.push(flight)
    }if(depDay === 4){
      depThur.push(flight)
    }
    if(depDay ===5){
      depFri.push(flight)
    }
    if(depDay ===6){
      depSat.push(flight)
    }
  }
});
console.log(depMon.length, depTue.length);
setMondayFlightsManchester(depMon.length);
setTuesdayFlightsManchester(depTue.length);
setWednesdayFlightsManchester(depWed.length);
setThursdayFlightsManchester(depThur.length);
setFridayFlightsManchester(depFri.length);
setSaturdayFlightsManchester(depSat.length);
setSundayFlightsManchester(depSun.length);
}


  return (
    <div className="App">
      <h1>Dashboard</h1>
      <p>Which flight has the most stops? [INSERT {}] </p>

      

      <p>Click button and review below to find day with most departures from Manchester (MAN):</p>
      <button onClick={findDayWithMostDepManchester}>Click me </button>
        <ul>
          <li>Monday: {mondayFlightsManchester}</li>
          <li>Tuesday: {tuesdayFlightsManchester} </li>
          <li>Wednesday: {wednesdayFlightsManchester}</li>
          <li>Thursday: {thursdayFlightsManchester}</li>
          <li>Friday: {fridayFlightsManchester}</li>
          <li>Saturday: {saturdayFlightsManchester} </li>
          <li>Sunday: {sundayFlightsManchester} </li>
        </ul>
        

      <p>How many different flight numbers on Monday: {}, Tuesday: {}, Wednesday: {}, Thursday: {}, Friday: {}, Saturday: {}, Sunday: {}</p>
      <p>Which proportion of the flights are business class?</p>
      <p>One other interesting statistic: {}</p>

    </div>
  );
}

export default App;
