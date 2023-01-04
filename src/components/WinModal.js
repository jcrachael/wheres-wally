import { Form } from "react-router-dom";
import "../styles/WinModal.css";
import { useNavigate } from "react-router-dom";

export default function WinModal({ view, timer, restartGame, saveTime }) {
  const navigate = useNavigate();

  function handleSaveTime(e) {
    const userName = e.nativeEvent.path[1][0].value;
    const usertime = timer;
    saveTime(userName, usertime);
    // redirect to /topscores
    navigate("/topscores");
  }

  return (
    <>
      {view === "won" && (
        <div className="WinModal">
          <div className="modal-header">
            <div></div>
            <h1 className="won-title">Level complete!</h1>
            <div className="close-modal" onClick={restartGame}>
              &times;
            </div>
          </div>
          <p>
            You found Wally and his friends in{" "}
            <span className="bold">
              <span className="timer-digits">
                {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
              </span>
              <span className="timer-digits mili-sec">
                {("0" + Math.floor((timer / 10) % 1000)).slice(-2)}
              </span>
              <span className="timer-digits s">s</span>
            </span>
            !
          </p>
          <p>Would you like to save your score?</p>
          <Form method="post">
            <input
              type="text"
              placeholder="Name"
              id="username"
              name="username"
            />
            <button type="submit" onClick={handleSaveTime}>
              Save
            </button>
          </Form>
        </div>
      )}
    </>
  );
}
