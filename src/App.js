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
      console.log(recurso.data.results)
      const data = recurso.data
          const heroe = {
            name: data.results[0].name,
            image: data.results.image,
            id: data.results.id,
            strength: data.results.strength,
            
          };
    setHeroes(oldHeroes => [...oldHeroes, heroe]);
  
  });
}

  function onClose(id) {
    setHeroes(oldHeroes => oldHeroes.filter(c => c.id !== id))
  }

  return (
    <div className="App">
      <Navbar onSearch={onSearch} />
      <Heroe heroes={heroes} onClose={onClose} /> 
     
    </div>
  );
}

export default App;
