import InfoBar from "../components/InfoBar";
import Leaderboard from "../components/Leaderboard";

export default function TopScores({ topScores }) {
  return (
    <div className="TopScores">
      <InfoBar view="scores" />
      <Leaderboard topScores={topScores} />
    </div>
  );
}
