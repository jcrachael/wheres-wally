import { useEffect, useState } from "react";
import InfoBar from "../components/InfoBar";
import GameLevel from "../components/GameLevel";
import BeginModal from "../components/BeginModal";
import WinModal from "../components/WinModal";
import "../styles/Home.css";

export default function Home({
  gameState,
  setGameState,
  level,
  handleBeginGame,
  timer,
  setTimer,
  restartGame,
}) {
  useEffect(() => {
    setGameState("init");
    setTimer("00.00");
  }, []);

  return (
    <div className="Home">
      {gameState === "init" && (
        <BeginModal view={gameState} handleClick={handleBeginGame} />
      )}
      {gameState === "won" && (
        <WinModal view={gameState} restartGame={restartGame} timer={timer} />
      )}

      <InfoBar view={gameState} timer={timer} />
      <GameLevel level={level} />
    </div>
  );
}
