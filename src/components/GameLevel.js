import { useState } from "react";
import level01 from "../img/levels/Level_01.svg";
import BeginModal from "./BeginModal";

export default function GameLevel({ level }) {
  const [showModal, setShowModal] = useState(true);

  function handleBeginGame() {
    setShowModal(false);
  }

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
      <BeginModal show={showModal} handleClick={handleBeginGame} />
      <img
        src={getLevelImg(level)}
        alt="Can you find Wally?"
        className="level-img"
      />
    </div>
  );
}
