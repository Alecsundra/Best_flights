import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Spin } from 'antd';

const App = () => {
  const [ airports,setAirports ] = useState()
  const [ airlines,setAirlines ] = useState()
  const [ mounted, setMounted ] =useState(false)

 useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/airports/all`, {
        method: 'GET',
        headers: new Headers({
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        }),
    })
    .then((response) => response.json())
    .then((data =>setAirports(data)))    .catch(err=>{
      console.log(err,'error')
      alert('Found a problem fetching data')
    })
      setMounted(true)
  },[])


 useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/airlines/all`, {
    method: 'GET',
    headers: new Headers({
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    }),
 })
    .then((response) => response.json())
    // .then((data => console.log(data)))   
    .then((data =>setAirlines(data.data)))
    .catch(err=>{
      console.log(err,'error')
      alert('Found a problem fetching data')
    })
  },[])
console.log(airlines)

  return(
    <div className = "App">
      <Navbar />
      {mounted 
      ? <Home airports={airports} airlines={airlines}/>
      : <Spin size="large" style={{marginTop:'2rem'}} /> 
      }
      <Footer />
    </div>
  )
}

export default App;
