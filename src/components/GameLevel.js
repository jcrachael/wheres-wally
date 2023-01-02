import { useEffect, useState } from "react";

export default function GameLevel({
  currentLevel,
  setCurrentLevel,
  gameState,
  setGameState,
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

  // Event handler for level image click
  function handleImgClick(e) {
    // TODO: display the clickbox and dropdown menu

    checkCoords(e.nativeEvent.offsetX, e.nativeEvent.offsetY, currentLevel);
    let char = foundAChar;
    if (char !== null) {
      // DEBUG console logs
      console.log(`You found ${char.name}!`);
      let newChars = currentLevel.chars.map((item) => {
        if (char.id === item.id) {
          return { ...item, found: true };
        } else {
          return item;
        }
      });
      setCurrentLevel({ ...currentLevel, chars: newChars });
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

  return (
    <div className="GameLevel">
      <img
        src={currentLevel.img}
        alt="Can you find Wally?"
        className="level-img"
        onClick={handleImgClick}
        loading="lazy"
      />
    </div>
  );
}
