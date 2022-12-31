import { levels } from "./Levels";

export default function GameLevel({ level }) {
  const currentLevel = levels[level - 1];

  // Checks if the user clicked on a char
  function checkCoords(x, y, char) {
    if (
      x >= char.x_min &&
      x <= char.x_max &&
      y >= char.y_min &&
      y <= char.y_max
    ) {
      console.log(`You found ${char.name}!`);
      char.found = true;
      console.log(char);
    } else {
      console.log("Not here...");
    }
  }

  function handleImgClick(e) {
    console.log(`x: ${e.clientX}; y: ${e.clientY}`);
    currentLevel.chars.forEach((char) => {
      console.log(char.x_min);
      checkCoords(e.clientX, e.clientY, char);
    });
  }

  return (
    <div className="GameLevel">
      <img
        src={currentLevel.img}
        alt="Can you find Wally?"
        className="level-img"
        onClick={handleImgClick}
      />
    </div>
  );
}
