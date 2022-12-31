export default function Score({ timer }) {
  return (
    <div className="score">
      <div className="bold mr-1">Time: </div>
      <div id="currentScore">{timer}</div>
    </div>
  );
}
