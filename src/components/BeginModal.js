import "../styles/BeginModal.css";

export default function BeginModal({ view, handleClick }) {
  return (
    <>
      {view === "init" && (
        <div className="BeginModal">
          <div className="begin-modal-content">
            <button
              type="button"
              className="btn begin-btn"
              onClick={handleClick}
            >
              Play
            </button>
          </div>
        </div>
      )}
    </>
  );
}
