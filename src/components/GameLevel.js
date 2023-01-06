import { useEffect, useState } from "react";
import "../styles/GameLevel.css";
import Notification from "./Notification";
import checkSymbol from "../img/check-symbol.png";

export default function GameLevel({
  currentLevel,
  setCurrentLevel,
  setGameState,
  clickBox,
  setClickBox,
  notifActive,
  notification,
  showNotification,
  hideNotification,
}) {
  const [charFound, setCharFound] = useState(null);
  const [markers, setMarkers] = useState([]);

  // Checks for a win after each char found
  useEffect(() => {
    let currentChars = currentLevel.chars.map((item) => {
      return item.found;
    });
    let win = currentChars.every((v) => v === true);
    if (win === true) {
      setGameState("won");
      setMarkers([]);
    }
  }, [currentLevel]);

  // Select form event handler
  // > The character the user selected from the form is the variable 'char'
  // > The character the user found on the image is the state variable 'charFound'
  function handleSelect(e) {
    e.preventDefault();
    let charSelected = e.nativeEvent.path[1][0].value;
    let char;
    currentLevel.chars.forEach((item) => {
      if (item.name === charSelected) {
        char = item;
      }
    });
    if (char === charFound) {
      showNotification(`You found ${char.name}!`);
      let newChars = setCharToFound(charFound);
      setCurrentLevel({ ...currentLevel, chars: newChars });
      // Get the coords and set the clickbox there
      let x = (char.x_min + char.x_max) / 2;
      let y = (char.y_min + char.y_max) / 2;
      // place the marker
      let x_offset = e.target.parentElement.parentElement.previousSibling.x;
      placeMarker(x, y, x_offset);
    } else {
      showNotification("Try again");
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
    return ch;
  }

  // Sets the new clickbox with the click coords
  function enableClickBox(x, y, e) {
    let newClickBox = {
      x: x + e.target.x - 25,
      y: y - 25,
      visibility: "visible",
    };
    setClickBox(newClickBox);
  }

  // Places a marker on the image at the given coords
  function placeMarker(x, y, x_offset) {
    let marker = {
      id: Math.random() * 99,
      x: x + x_offset - 25,
      y: y - 25,
      visibility: "visible",
    };
    setMarkers([...markers, marker]);
  }

  // Gets an array of JSX elements from the markers array
  function getMarkers() {
    let markerList = markers.map((item) => {
      let markStyle = {
        id: item.id,
        top: item.y,
        left: item.x,
        visibility: item.visibility,
      };
      return (
        <img
          key={item.id}
          src={checkSymbol}
          alt="Found"
          className="marker"
          style={markStyle}
        />
      );
    });
    return markerList;
  }

  // Updates the char.found to true
  function setCharToFound(char) {
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

  let clickBoxStyle = {
    top: clickBox.y,
    left: clickBox.x,
    visibility: clickBox.visibility,
  };

  // Gets the chars from the current level and returns them as an array
  // of JSX <option> elements
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
      {notifActive === true && (
        <Notification msg={notification} hideNotification={hideNotification} />
      )}
      {markers.length > 0 && getMarkers()}
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
