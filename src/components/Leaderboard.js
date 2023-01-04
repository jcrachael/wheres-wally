import "../styles/Leaderboard.css";

export default function Leaderboard({ leaderboard }) {
  // dummy data for static page

  const list = leaderboard.map((item) => {
    return (
      <tr key={item.id} id={item.id}>
        <td className="username">{item.username}</td>
        <td className="score">
          <span className="timer-digits">
            {("" + Math.floor((item.score / 1000) % 60)).slice(-2)}.
          </span>
          <span className="timer-digits mili-sec">
            {("0" + Math.floor((item.score / 10) % 1000)).slice(-2)}
          </span>
          <span className="timer-digits s">s</span>
        </td>
      </tr>
    );
  });

  return (
    <div className="Leaderboard">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}
