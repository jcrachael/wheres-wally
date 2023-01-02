// React-router-dom
import CharList from "./CharList";
import Timer from "./Timer";
import "../styles/InfoBar.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function InfoBar({
  gameState,
  timer,
  setTimer,
  currentLevel,
  userTime,
  setUserTime,
}) {
  const location = useLocation();

  useEffect(() => {
    let interval = null;
    if (gameState === "playing") {
      interval = setInterval(() => {
        setTimer((time) => time + 10);
      }, 10);
    } else if (gameState === "won") {
      setUserTime(timer);
      clearInterval(interval);
    } else {
      clearInterval();
    }
    return () => {
      clearInterval(interval);
    };
  }, [gameState]);

  return (
    <div className="InfoBar">
      <div className="info-left">
        <h2 className="infobar-title">
          {" "}
          {location.pathname === "/topscores" ? "Top scores" : "Searching for:"}
        </h2>
        {gameState === "playing" && <CharList currentLevel={currentLevel} />}
      </div>
      <div className="info-right">
        {gameState === "playing" && <Timer timer={timer} />}
      </div>
    </div>
  );
}
