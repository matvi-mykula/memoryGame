import React, { useState } from "react";
import scienceRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/scientist.jpeg";
import cookieRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/eatingCookie.jpeg";
import dancingRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/dancingRacoon.jpeg";
import appleRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/eatingApple.jpeg";
import loverRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/lover.jpeg";
import streetwearRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/streetwear.jpeg";

function MakeTiles(props) {
  console.log(props);
  const imgList = [
    scienceRacoon,
    cookieRacoon,
    dancingRacoon,
    appleRacoon,
    loverRacoon,
    streetwearRacoon,
  ];
  const shuffledTiles = shuffle(imgList);

  const tiles = [];
  const initialTrack = [];
  for (let i = 0; i < shuffledTiles.length; i++) {
    initialTrack.push(false);
  }

  const [clickedTracker, setClickedTracker] = useState(initialTrack);

  for (let i = 0; i < shuffledTiles.length; i++) {
    tiles.push(
      <img
        src={shuffledTiles[i]}
        alt=""
        className="image"
        onClick={() => {
          if (!clickedTracker[i]) {
            let newTracker = clickedTracker;
            newTracker[i] = true;
            setClickedTracker(newTracker);
            props.setScore(props.score + 1);
            if (props.score > props.highscore) {
              props.setHighScore(props.score);
            }

            console.log(clickedTracker);
          } else {
            props.setScore(0);
            setClickedTracker(initialTrack);
          }
        }}
      />
    );
  }
  return <div className="images">{tiles}</div>;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export { MakeTiles };
