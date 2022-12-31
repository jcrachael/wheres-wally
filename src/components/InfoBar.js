// React-router-dom
import { Link } from "react-router-dom";

import CharList from "./CharList";

export default function InfoBar({ view }) {
  return (
    <div className="InfoBar">
      <div className="info-left">
        <h2 className="infobar-title">
          {" "}
          {view === "game" ? "Searching for:" : "Top scores"}
        </h2>
        {view === "game" && <CharList />}
      </div>
      <div className="info-right">
        {view === "game" ? (
          <Link to="/topscores">
            <button type="button" className="btn go-to-scores-btn">
              Top scores
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button type="button" className="btn go-to-home-btn">
              Go back
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
