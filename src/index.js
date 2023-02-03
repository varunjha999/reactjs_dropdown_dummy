import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
//function App() {
  //   //state to store the value of the country
  //   const [country, setCountry] = useState("");
  //   //state to store the value of the city
  //   const [city, setCity] = useState("");
  //   return (
  //     <div className="App">
  //       {/* <h1>React Dropdown</h1> */}
  //       <select
  //         value={country}
  //         onChange={(e) => {
  //           console.log(e.target.value);
  
  //         setCountry(e.target.value);
  //         }
  //         }
  //  >
  
  //         {countries.map((item, index) => (
  //           <option value={index}>{item.name}</option>
  //         ))}
  //       </select>
  //       {/* <h2>Cities Dropdown</h2>  */}
  
  //       <select value={country}>
  //       onChange={(e) => {
  //         console.log(e.target.value);
  //         setCity(e.target.value);
  //       }}
  //         {countries[country].cities.map((item, index) => {
  //           return <option value={index}>{item}</option>;
  //         })}
          
  //       </select>
  
  //     </div>
  //   );
  // }
  
  //export default App;
  