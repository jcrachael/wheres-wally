import "../styles/Leaderboard.css";

export default function Leaderboard() {
  // dummy data for static page
  const topScores = [{ id: 0, username: "jcrachael", score: "2.165s" }];

  const list = topScores.map((item) => {
    return (
      <tr key={item.id} id={item.id}>
        <td className="username">{item.username}</td>
        <td className="score">{item.score}</td>
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
