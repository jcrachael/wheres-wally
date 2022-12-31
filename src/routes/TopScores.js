import InfoBar from "../components/InfoBar";
import Leaderboard from "../components/Leaderboard";

export default function TopScores() {
  return (
    <div className="TopScores">
      <InfoBar view="scores" />
      <Leaderboard />
    </div>
  );
}
