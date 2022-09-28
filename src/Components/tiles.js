import React, { useState } from "react";
import scienceRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/scientist.jpeg";
import cookieRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/eatingCookie.jpeg";
import dancingRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/dancingRacoon.jpeg";
import appleRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/eatingApple.jpeg";
import loverRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/lover.jpeg";
import streetwearRacoon from "/Users/matvimykula/Documents/Projects/ODIN Project/memorygame/src/icons/streetwear.jpeg";

function MakeTiles(props) {
  const imgDict = {
    [scienceRacoon]: 0,
    [cookieRacoon]: 1,
    [dancingRacoon]: 2,
    [appleRacoon]: 3,
    [loverRacoon]: 4,
    [streetwearRacoon]: 5,
  };
  // top possible score condition

  const shuffledTiles = shuffle(Object.keys(imgDict));

  const tiles = [];
  const initialTrack = [];
  for (let i = 0; i < Object.keys(imgDict).length; i++) {
    initialTrack.push(false);
  }

  const [clickedTracker, setClickedTracker] = useState(initialTrack);

  for (let i = 0; i < shuffledTiles.length; i++) {
    tiles.push(
      <img
        src={shuffledTiles[i]}
        alt=""
        id={shuffledTiles[i]}
        className="image"
        onClick={() => {
          if (!clickedTracker[imgDict[shuffledTiles[i]]]) {
            let newTracker = clickedTracker;

            newTracker[imgDict[shuffledTiles[i]]] = true;
            console.log({ newTracker });
            setClickedTracker(newTracker);
            props.setScore(props.score + 1);
            if (props.score > props.highscore) {
              props.setHighScore(props.score);
            }
          } else {
            props.setScore(0);
            setClickedTracker(initialTrack);
          }
        }}
      />
    );
  }
  if (props.highscore === Object.keys(imgDict).length) {
    return <p>That is the Top Possible Score! Congrats!</p>;
  }
  return <div className="images">{tiles}</div>;
}

function shuffle(oldArray) {
  let array = oldArray;
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
