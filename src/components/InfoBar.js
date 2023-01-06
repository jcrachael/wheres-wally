import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CharList from "./CharList";
import Timer from "./Timer";
import "../styles/InfoBar.css";

export default function InfoBar({
  gameState,
  timer,
  setTimer,
  currentLevel,
  setUserTime,
}) {
  const location = useLocation();

  // Starts the timer if gamestate = "playing", otherwise stops
  // the timer; is called whenever gamestate changes
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
