import React, { useState } from 'react';
import './App.css';
import { Switch, Router, Route, useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import Navbar from './components/Navbar';
import Heroe from './components/Heroe';

function App() {
  const [heroes, setHeroes] = useState([]);

  function onSearch(heroe) {
    
    axios.get(`https://superheroapi.com/api.php/531800601584511/search/${heroe}`)
    // .then(r => r.json())
    .then((recurso) => {
        if(recurso.main !== undefined){
          const heroe = {
            name: recurso.name,
            image: recurso.image.url,
            id: recurso.results.id,
            strength: recurso.results.strength,
            
          };
    setHeroes(oldHeroes => [...oldHeroes, heroe]);
  } else {
    alert("SuperHeroe no encontrado");
  }
  });
}
    
  return (
    <div className="App">
      <Navbar onSearch={onSearch} />
      <Heroe heroes={heroes} /> 
     
    </div>
  );
}

export default App;
