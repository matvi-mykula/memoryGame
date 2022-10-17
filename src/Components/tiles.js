import React, { useState } from 'react';
import scienceRacoon from '../icons/scientist.jpeg';
import cookieRacoon from '../icons/eatingCookie.jpeg';
import dancingRacoon from '../icons/dancingRacoon.jpeg';
import appleRacoon from '../icons/eatingApple.jpeg';
import loverRacoon from '../icons/lover.jpeg';
import streetwearRacoon from '../icons/streetwear.jpeg';
import cleaningRacoon from '../icons/cleaningRacoon.png';
import moneyBagRacoon from '../icons/moneyBagRacoon.jpeg';
import suitRacoon from '../icons/suitRacoon.jpeg';

function MakeTiles(props) {
  const imgDict = {
    [scienceRacoon]: 0,
    [cookieRacoon]: 1,
    [dancingRacoon]: 2,
    [appleRacoon]: 3,
    [loverRacoon]: 4,
    [streetwearRacoon]: 5,
    [cleaningRacoon]: 6,
    [moneyBagRacoon]: 7,
    [suitRacoon]: 8,
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
  if (props.score === Object.keys(imgDict).length) {
    return (
      <div>
        <br />
        <p>
          {' '}
          <em> That is the Top Possible Score! Congrats!</em>{' '}
        </p>
      </div>
    );
  }
  return <div className="images">{tiles}</div>;
}

function shuffle(oldArray) {
  let array = oldArray;
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
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
