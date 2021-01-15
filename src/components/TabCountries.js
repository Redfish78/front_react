import React, { useEffect, useState } from 'react'

export const TabOfCountries = () => {

  const [lstNames, setLstNames] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/region/europe").then(response => 
      response.json().then(data => {
          console.log(data);
        setLstNames(data);
      })
    );
  }, []);

  return (
    <ul className="LstCountries">
     {lstNames.map((item, key) => <li key={key}> {item["name"]}</li>)}
    </ul>
  );
};