// React
import { useState } from "react";

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

function App() {
  // States for the game
  const [gameState, setGameState] = useState("init"); // or 'playing' or 'won'
  const [timer, setTimer] = useState("00.00"); // TODO set timer
  const [username, setUsername] = useState(null); // username for leaderboard
  const [leaderboard, setLeaderboard] = useState([]); // the database data for displaying on /topscores
  const [level, setLevel] = useState(1); // the game level

  // on click handler for begin game btn click
  function handleBeginGame() {
    setGameState("playing");

    // TODO: begin timer
  }

  function restartGame() {
    setGameState("init");
    setTimer("00.00");
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
