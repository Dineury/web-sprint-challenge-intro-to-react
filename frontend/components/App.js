import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const urlPlanets = "http://localhost:9009/api/planets";
const urlPeople = "http://localhost:9009/api/people";

function App() {
  // ❗ Create state to hold the data from the API
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
 

  

  for (let i = 0; i < people.length; i++) {
    if (people[i].homeworld) {
      for (let j = 0; j < planets.length; j++) {
        if (people[i].homeworld === planets[j].id) {
        people[i].homeworld = planets[j].name;
        }
      }
    }
  }




  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    axios
      .get(urlPeople)
      .then(res => {
        setPeople(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(urlPlanets)
      .then((res) => {
        setPlanets(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>
        See the README of the project for instructions on completing this
        challenge
      </p>
      {
      people.map(p => {
        return <Character key={p.id} 
        personName={p.name} planetName={p.homeworld} />
        
      })
      }
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports) module.exports = App;
