import "./App.css";
import { planetsData } from "./planets";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedName) {
    setSelectedTopic(selectedName);
  }

  return (
    <div className="container">
      <div className="planets">
        <ul>
          <List onSelect={() => handleClick(planetsData[0])}>Mercury</List>
          <List onSelect={() => handleClick(planetsData[1])}>Venus</List>
          <List onSelect={() => handleClick(planetsData[2])}>Earth</List>
          <List onSelect={() => handleClick(planetsData[3])}>Mars</List>
          <List onSelect={() => handleClick(planetsData[4])}>Jupiter</List>
          <List onSelect={() => handleClick(planetsData[5])}>Saturn</List>
          <List onSelect={() => handleClick(planetsData[6])}>Uranus</List>
          <List onSelect={() => handleClick(planetsData[7])}>Neptune</List>
          <List onSelect={() => handleClick(planetsData[8])}>Pluto</List>
          <List onSelect={() => handleClick(planetsData[9])}>Ceres</List>
        </ul>
      </div>
      <div className="infoPlanet">
        {!selectedTopic ? (
          <p>Please select a planet</p>
        ) : (
          <div>
              <h2>{selectedTopic.title}</h2>
              <img src={selectedTopic.image} alt={selectedTopic.name} />
            <p>{selectedTopic.description}</p>
            <p>
              <strong>Distance from the Sun:</strong>{" "}
              {selectedTopic.distanceFromSun}
            </p>
            <p>
              <strong>Diameter: </strong>
              {selectedTopic.diameter}{" "}
            </p>
            <p>
              <strong>Gravity: </strong>
              {selectedTopic.gravity}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
