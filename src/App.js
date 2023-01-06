// React
import { useEffect, useState } from "react";

// React-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// Firebase
import { firestore } from "./firebase_setup/firebase"; // our database
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

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
  const level = 1; // the game level
  const [currentLevel, setCurrentLevel] = useState(levels[level - 1]);
  const [userTime, setUserTime] = useState(0);
  const clickBoxObject = {
    x: 0,
    y: 0,
    visibility: "hidden",
  };
  const [clickBox, setClickBox] = useState(clickBoxObject);
  const [notifActive, setNotifActive] = useState(false);
  const [notification, setNotification] = useState("");

  // Firestore database
  // TODO: check if leaderboard variable is required; we might just make
  // calls to the Firestore each time we need it? Check when quota restored
  // Sample leaderboard doc: { score: 7839, username: 'my_name' }
  const [leaderboard, setLeaderboard] = useState([]);
  const [topScores, setTopScores] = useState([]);
  const leaderboardRef = collection(firestore, "leaderboard");

  // LEADERBOARD AND TOPSCORES

  // TODO: check if this is required still and how to prevent infinite loop
  // Gets the leaderboard and topScores data on initial render
  useEffect(() => {
    updateLeaderboard();
    updateTopScores();
  }, []);

  // Gets the leaderboard from the firestore and returns it in a array
  async function getLeaderboard() {
    const snapshot = await getDocs(leaderboardRef);
    const arr = snapshot.docs.map((doc) => doc.data());
    return arr;
  }

  // Gets the top 10 scores from the firestore in asc. order
  async function getTopScores() {
    const q = query(leaderboardRef, orderBy("score", "asc"), limit(10));
    const querySnapshot = await getDocs(q);
    const queryList = querySnapshot.docs.map((doc) => doc.data());
    return queryList;
  }

  // Sets the leaderboard state var to the array returned from getLeaderboard()
  async function updateLeaderboard() {
    let data = await getLeaderboard();
    return setLeaderboard(data);
  }

  // Updates the topScores state var to the array returned from getTopScores()
  async function updateTopScores() {
    let data = await getTopScores();
    return setTopScores(data);
  }

  // Save user's time to the firestore and updates the leaderboard and
  // topScores state variables
  async function saveTime(name, time) {
    // manually adding to the leaderboard
    const data = { score: time, username: name };
    await addDoc(collection(firestore, "leaderboard"), data);
    updateLeaderboard();
    updateTopScores();
  }

  // Shows the notification dialog
  function showNotification(msg) {
    setNotifActive(true);
    setNotification(msg);
    setTimeout(hideNotification, 2000);
  }

  // Hides the notification dialog
  function hideNotification() {
    setNotifActive(false);
    setNotification("");
  }

  // on click handler for begin game btn click
  function handleBeginGame() {
    setGameState("playing");
  }

  // Resets the game
  function restartGame() {
    setGameState("init");
    setTimer(0);
    setCurrentLevel(levels[level - 1]);
    setClickBox(clickBoxObject);
    hideNotification();
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
                notifActive={notifActive}
                notification={notification}
                showNotification={showNotification}
                hideNotification={hideNotification}
                saveTime={saveTime}
                topScores={topScores}
              />
            }
          />
          <Route
            path="/topscores"
            element={<TopScores topScores={topScores} />}
          />
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
