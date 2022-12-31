export default function Score({ timeElapsed }) {
  return (
    <div className="score">
      <div className="bold mr-1">Time: </div>
      <div id="currentScore">{timeElapsed}</div>
    </div>
  );
}
