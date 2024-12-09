export default Notification = ({ errorMessage }) => {
  if (errorMessage === null) return null;
  const notificationStyle = {
    color: "red",
    backgroundColor: "lightgrey",
    border: "solid red 2px",
  };
  return <div style={notificationStyle}>{errorMessage}</div>;
};
