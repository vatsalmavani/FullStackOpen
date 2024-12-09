import { useEffect } from "react";

const Notification = ({ notification, setNotification }) => {
  if (notification === null) return null;
  const notificationStyle = {
    color: !notification.includes("delete") ? "green" : "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return <div style={notificationStyle}>{notification}</div>;
};

export default Notification;
