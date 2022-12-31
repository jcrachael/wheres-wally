import InfoBar from "../components/InfoBar";
import GameLevel from "../components/GameLevel";
import "../styles/Home.css";

export default function Home() {
  let level = 1;
  return (
    <div className="Home">
      <InfoBar view="game" />
      <GameLevel level={level} />
    </div>
  );
}
