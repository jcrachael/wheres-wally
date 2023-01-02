import { useEffect } from "react";

import InfoBar from "../components/InfoBar";
import GameLevel from "../components/GameLevel";
import BeginModal from "../components/BeginModal";
import WinModal from "../components/WinModal";

export default function Home({
  gameState,
  setGameState,
  handleBeginGame,
  timer,
  setTimer,
  restartGame,
  userTime,
  setUserTime,
  currentLevel,
  setCurrentLevel,
  clickBox,
  setClickBox,
}) {
  useEffect(() => {
    restartGame();
  }, []);

  return (
    <div className="Home">
      {gameState === "init" && (
        <BeginModal view={gameState} handleClick={handleBeginGame} />
      )}
      {gameState === "won" && (
        <WinModal view={gameState} restartGame={restartGame} timer={userTime} />
      )}

      <InfoBar
        gameState={gameState}
        timer={timer}
        setTimer={setTimer}
        currentLevel={currentLevel}
        userTime={userTime}
        setUserTime={setUserTime}
      />
      <GameLevel
        currentLevel={currentLevel}
        setCurrentLevel={setCurrentLevel}
        gameState={gameState}
        setGameState={setGameState}
        clickBox={clickBox}
        setClickBox={setClickBox}
      />
    </div>
  );
}
