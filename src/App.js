// React
import { useEffect, useState } from "react";

// React-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// Custom components
import Template from "./components/Template";
import ErrorPage from "./components/ErrorPage";
import Home from "./routes/Home";
import TopScores from "./routes/TopScores";

// Dummy data
import { levels } from "./components/Levels";

function App() {
  // States for the game
  const [gameState, setGameState] = useState("init"); // or 'playing' or 'won'
  const [timer, setTimer] = useState(0);
  const [level, setLevel] = useState(1); // the game level
  const [currentLevel, setCurrentLevel] = useState(levels[level - 1]);
  const [userTime, setUserTime] = useState(0);
  const [username, setUsername] = useState(null); // username for leaderboard
  const [leaderboard, setLeaderboard] = useState([]); // the database data for displaying on /topscores
  const clickBoxObject = {
    x: 0,
    y: 0,
    visibility: "hidden",
  };
  const [clickBox, setClickBox] = useState(clickBoxObject);

  // on click handler for begin game btn click
  function handleBeginGame() {
    setGameState("playing");
  }

  function restartGame() {
    setGameState("init");
    setTimer(0);
    setCurrentLevel(levels[level - 1]);
    setClickBox(clickBoxObject);
  }

  // Router config
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Template />} errorElement={<ErrorPage />}>
        <Route errorElement={<ErrorPage />}>
          <Route
            index
            element={
              <Home
                handleBeginGame={handleBeginGame}
                gameState={gameState}
                setGameState={setGameState}
                level={level}
                timer={timer}
                setTimer={setTimer}
                restartGame={restartGame}
                userTime={userTime}
                setUserTime={setUserTime}
                currentLevel={currentLevel}
                setCurrentLevel={setCurrentLevel}
                clickBox={clickBox}
                setClickBox={setClickBox}
              />
            }
          />
          <Route path="/topscores" element={<TopScores />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
