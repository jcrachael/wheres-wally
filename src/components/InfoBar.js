// React-router-dom
import CharList from "./CharList";
import Score from "./Score";
import "../styles/InfoBar.css";
import { useLocation } from "react-router-dom";

export default function InfoBar({ view, timer }) {
  const location = useLocation();

  return (
    <div className="InfoBar">
      <div className="info-left">
        <h2 className="infobar-title">
          {" "}
          {location.pathname === "/topscores" ? "Top scores" : "Searching for:"}
        </h2>
        {view === "playing" && <CharList />}
      </div>
      <div className="info-right">
        {view === "playing" && <Score timer={timer} />}
      </div>
    </div>
  );
}
