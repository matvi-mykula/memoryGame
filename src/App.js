import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { MakeTiles, displayRandomOrder } from "./Components/tiles.js";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  if (score > highScore) {
    setHighScore(score);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Memory Game </p>
        <div className="scores">
          <p>Score: {score} </p>

          <p>HighScore: {highScore} </p>
        </div>
      </header>
      <MakeTiles
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      ></MakeTiles>
      {/* <Tiles
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      ></Tiles> */}
    </div>
  );
}

export default App;
