import React, { useState, useEffect } from 'react';

import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';

function Navbar({onSearch}) {
  const [character, setCharacter] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    getNouns();
  }, [])

    const getNouns = async() => {
      const url = `https://superheroapi.com/api.php/531800601584511/search/batman`;
      const resp = await axios.get(url);
      const data = await resp.data.results;
      console.log(data)
      setCharacter(data);
    }

    // const handleChange = (e) => {
    //   setValue(e.target.value);
    // }

    // const filterHeroes = character.filter(person => {
    //   return person.name.toLowerCase().includes(value.toLowerCase());
    // })
    
    return (
        <>
         <ReactBootstrap.Navbar bg="light" expand="lg">
            <ReactBootstrap.Navbar.Brand href="#home">Alkemy - SuperHero</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
          <ReactBootstrap.Button variant="outline-success">Loguin</ReactBootstrap.Button>
          </ReactBootstrap.Nav>
            <ReactBootstrap.Form onSubmit={(e) => {
                  e.preventDefault();
                  onSearch(value);
                  }} inline >
                <ReactBootstrap.FormControl type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Busca..." className="mr-sm-2" />
                <ReactBootstrap.Button type="submit" variant="outline-success">Agregar</ReactBootstrap.Button>
            </ReactBootstrap.Form>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
        <ul>

        
        </ul>
        </>
    );
}

export default Navbar;
