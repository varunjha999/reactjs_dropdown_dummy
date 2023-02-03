//import React, { useState } from 'react';
import './App.css';
const countries = [
  { name: "India", value: "IN", cities: [
    'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore'
  ] },

  { name: "Pak", value: "PK", cities: [
    'Lahore', 'Karachi', 'Islamabad', 'Multan', 'Peshawar'
    ] },

  { name: "Bangladesh", value: "BG", cities: [
    'Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet'
    ] },

  ];

function App() {
  //const [country, setCountry] = useState("");
  //const [city, setCity] = useState("");
    
  return (
    <div className="App">
      <h1>React Dropdown</h1>
       <select>

        {countries.map((item, index) => (
          <option value={index}>{item.name}</option>
        ))}
       </select>

      <h2>Cities Dropdown</h2>
      <select>
        {countries[0].cities.map((item, index) => {
          return <option value={index}>{item}</option>;
        })}
      </select>


    </div>
  );
}

export default App;

