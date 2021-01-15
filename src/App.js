import React, { useEffect } from 'react'
import {ListOfNames} from './components/ListNames'
import {TabOfCountries} from './components/TabCountries'
// </* import './App.css'; */>

function App() {
  useEffect(() => {
    fetch("/api/names").then(response => 
      response.json().then(data => {
        console.log(data);
      })
    );
  }, []);

  return (
    <div className="App">
      <div>
        <h1>List of Countries:</h1>
        <TabOfCountries/>
      </div>
      <div>
        <h1>List of names:</h1>
        <ListOfNames/>
      </div>
    </div>
    
  );
}

export default App;
