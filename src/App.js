import React from 'react';
import './App.css';
import {getFlights} from './Api';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

// TO DO
// 1.DATA AIRPORTS TO FILL THE INPUT ORIGIN/DESTINATION OPTIONS
// 2.SET STATE FOR THE CHOOSEN AND API CALL FOR THE FLIGHTS/PASSING PARAMS
// 3.

const App = () => {

  return(
    <>
      <Navbar />
      <Home />
      <Footer />
      <button onClick={getFlights}>data</button>
        {/* <button onClick={getAirports}>Air</button>
        <button onClick={getAirlines}>Airlines</button>
        <button onClick={getRoute}>Route</button> */}
    </>
  )
}

export default App;
