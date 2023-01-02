export default function Timer({ timer }) {
  return (
    <div className="score">
      <div className="bold mr-1 timer-title">Time: </div>
      <div id="currentScore">
        <span className="timer-digits">
          {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
        </span>
        <span className="timer-digits">
          {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
        </span>
        <span className="timer-digits mili-sec">
          {("0" + Math.floor((timer / 10) % 1000)).slice(-1)}
        </span>
        <span className="timer-digits s">s</span>
      </div>
    </div>
  );
}
