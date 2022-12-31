import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../img/logo.svg";
import "../styles/Template.css";
import Score from "./Score";

function Template() {
  const [timeElapsed, setTimeElapsed] = useState("00:00:00");

  const location = useLocation();

  return (
    <div className="Template container">
      <header>
        <div className="logo">
          <img src={logo} alt="Where's Wally?" className="logo-img" />
          <h2 className="title">Find Wally and his friends!</h2>
        </div>
        {location.pathname === "/" && <Score timeElapsed={timeElapsed} />}
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
