import "../styles/Notification.css";

export default function Notification({ msg, hideNotification }) {
  return (
    <div className="notification">
      <p className="notif-text">{msg}</p>
      <p className="notif-close" onClick={hideNotification}>
        &times;
      </p>
    </div>
  );
}
