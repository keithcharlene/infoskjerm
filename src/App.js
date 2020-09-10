import React from 'react';
import Title from "./Title";
import DadJoke from "./DadJoke";
import Bikes from "./Bikes";
import './App.css';

function App() {
  console.log("Heisann");

  return (
        <div className="App">
          <Title />
          <DadJoke />
          <Bikes />
      </div>
  );
}

export default App;
