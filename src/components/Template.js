import { Outlet, useLocation, Link } from "react-router-dom";
import logo from "../img/logo.svg";
import "../styles/Template.css";

function Template() {
  const location = useLocation();

  return (
    <div className="Template container">
      <header>
        <div className="logo">
          <img src={logo} alt="Where's Wally?" className="logo-img" />
          <h2 className="title">Find Wally and his friends!</h2>
        </div>
        {location.pathname === "/" && (
          <Link to="/topscores">
            <button type="button" className="btn go-to-scores-btn">
              Top scores
            </button>
          </Link>
        )}
        {location.pathname === "/topscores" && (
          <Link to="/">
            <button type="button" className="btn home-btn">
              Home
            </button>
          </Link>
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
