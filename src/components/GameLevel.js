import level01 from "../img/levels/Level_01.svg";

export default function GameLevel({ level }) {
  function getLevelImg(level) {
    if (level === 1) {
      return level01;
    } else {
      console.error("Error getting game level image");
      return;
    }
  }

  return (
    <div className="GameLevel">
      <img
        src={getLevelImg(level)}
        alt="Can you find Wally?"
        className="level-img"
      />
    </div>
  );
}
