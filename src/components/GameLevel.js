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
  const [charFound, setCharFound] = useState(null);

  // the Select form event handler
  function handleSelect(e) {
    e.preventDefault();
    // the character the user selected from the form
    // is the variable 'char'
    // the character the user found on the image is
    // the state variable 'charFound'
    let charSelected = e.nativeEvent.path[1][0].value;
    let char;
    currentLevel.chars.forEach((item) => {
      if (item.name === charSelected) {
        char = item;
      }
    });
    if (char === charFound) {
      // TODO: implement notification popup for this info
      console.log("You found " + char.name + "!");
      let newChars = setCharToFound(charFound);
      setCurrentLevel({ ...currentLevel, chars: newChars });
    } else {
      // TODO: implement notification popup for this info
      console.log("Try a closer look");
    }
    setCharFound(null);
    setClickBox({ ...clickBox, visibility: "hidden" });
  }

  // Checks if the user clicked on a char
  function checkCoords(x, y, level) {
    let ch = null;
    level.chars.forEach((char) => {
      if (
        x >= char.x_min &&
        x <= char.x_max &&
        y >= char.y_min &&
        y <= char.y_max
      ) {
        return (ch = char);
      }
    });
    setCharFound(ch);
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

  function setCharToFound(char) {
    // update the char.found to true
    let newChars = currentLevel.chars.map((item) => {
      if (char.id === item.id) {
        return { ...item, found: true };
      } else {
        return item;
      }
    });
    return newChars;
  }

  // Event handler for level image click
  function handleImgClick(e) {
    // Get the coords and set the clickbox there
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    enableClickBox(x, y, e);
    // Check if charFound returns a char or null
    checkCoords(x, y, currentLevel);
  }

  // checks for a win after each char found
  useEffect(() => {
    let currentChars = currentLevel.chars.map((item) => {
      return item.found;
    });
    let win = currentChars.every((v) => v === true);
    if (win === true) {
      setGameState("won");
    }
  }, [currentLevel]);

  let clickBoxStyle = {
    top: clickBox.y,
    left: clickBox.x,
    visibility: clickBox.visibility,
  };

  function getCharOptions() {
    let currentChars = currentLevel.chars.map((item) => {
      return item;
    });
    let charOptions = currentChars.map((char) => {
      return (
        <option key={char.id} value={char.name}>
          {char.name}
        </option>
      );
    });
    return charOptions;
  }

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
        <div className="clickBox-container" style={clickBoxStyle}>
          <div className="clickBox" style={clickBoxStyle}></div>
          {charFound !== null && (
            <form id="char-select-form">
              <label htmlFor="char-select">Who did you find?</label>
              <select name="char-select" id="char-select" required={true}>
                {getCharOptions()}
              </select>
              <button type="submit" id="char-select-btn" onClick={handleSelect}>
                Check
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
