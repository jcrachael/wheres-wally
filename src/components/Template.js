import { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../img/logo.svg";
import "../styles/Template.css";
import Tallies from "./Tallies";

function Template() {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentTimeElapsed, setCurrentTimeElapsed] = useState("00:00:00");
  let home = true;
  return (
    <div className="Template container">
      <header>
        <div className="logo">
          <img src={logo} alt="Where's Wally?" className="logo-img" />
          <h2 className="title">Find Wally and his friends!</h2>
        </div>
        {home && (
          <Tallies
            currentScore={currentScore}
            currentTimeElapsed={currentTimeElapsed}
          />
        )}
      </header>
      <main>
        <div className="Outlet">
          <Outlet />
        </div>
      </main>

      <footer>
        <p>
          Copyright © Rachael Cole 2022. This project is{" "}
          <a href="https://github.com/jcrachael/wheres-wally/">open source</a>.
        </p>
      </footer>
    </div>
  );
}

export default Template;
