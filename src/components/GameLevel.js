import { useEffect, useState } from "react";
import "../styles/GameLevel.css";

export default function GameLevel({
  currentLevel,
  setCurrentLevel,
  gameState,
  setGameState,
  clickBox,
  setClickBox,
}) {
  let foundAChar = null;

  // Checks if the user clicked on a char
  function checkCoords(x, y, level) {
    level.chars.forEach((char) => {
      if (
        x >= char.x_min &&
        x <= char.x_max &&
        y >= char.y_min &&
        y <= char.y_max
      ) {
        foundAChar = char;
      }
    });
    return foundAChar;
  }

  function enableClickBox(x, y, e) {
    // set the new clickbox with the click coords

    let newClickBox = {
      x: x + e.target.x - 25,
      y: y - 25,
      visibility: "visible",
    };

    setClickBox(newClickBox);
  }

  // Event handler for level image click
  function handleImgClick(e) {
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    checkCoords(x, y, currentLevel);
    let char = foundAChar;
    enableClickBox(x, y, e);
    if (char !== null) {
      // DEBUG console logs
      console.log(`You found ${char.name}!`);

      // TODO: display the dropdown menu

      // update the char.found to true
      let newChars = currentLevel.chars.map((item) => {
        if (char.id === item.id) {
          return { ...item, found: true };
        } else {
          return item;
        }
      });
      setCurrentLevel({ ...currentLevel, chars: newChars });
    } else {
      console.log("Noone here...");
    }
  }

  // checks for a win after each char found
  useEffect(() => {
    let currentChars = currentLevel.chars.map((item) => {
      return item.found;
    });

    let win = currentChars.every((v) => v === true);

    if (win === true) {
      // DEBUG console logs
      console.log("You found all the chars! Level complete!");

      setGameState("won");
    }
  }, [currentLevel]);

  let clickBoxStyle = {
    top: clickBox.y,
    left: clickBox.x,
    visibility: clickBox.visibility,
  };

  return (
    <div className="GameLevel">
      <img
        src={currentLevel.img}
        alt="Can you find Wally?"
        className="level-img"
        onClick={handleImgClick}
        loading="lazy"
      />
      {clickBox.visibility === "visible" && (
        <div className="clickBox" style={clickBoxStyle}></div>
      )}
    </div>
  );
}
