import { Form } from "react-router-dom";
import "../styles/WinModal.css";

export default function WinModal({ view, timer, restartGame }) {
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
            <span className="bold">{timer}</span> seconds!
          </p>
          <p>Would you like to save your score?</p>
          <Form method="post">
            <input
              type="text"
              placeholder="Name"
              id="username"
              name="username"
            />
            <button type="submit">Save</button>
          </Form>
        </div>
      )}
    </>
  );
}
