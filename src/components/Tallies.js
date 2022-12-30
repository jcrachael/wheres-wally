export default function Tallies({ currentScore, currentTimeElapsed }) {
  return (
    <div className="tallies">
      <div className="time">
        <div className="bold mr-1">Time:</div>
        <div id="currentTime">{currentTimeElapsed}</div>
      </div>
      <div className="score">
        <div className="bold mr-1">Score: </div>
        <div id="currentScore">{currentScore}</div>
      </div>
    </div>
  );
}
