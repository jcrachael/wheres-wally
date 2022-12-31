import "../styles/BeginModal.css";

export default function BeginModal({ show, handleClick }) {
  return (
    <>
      {show && (
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
