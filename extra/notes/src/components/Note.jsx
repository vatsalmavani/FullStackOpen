const Note = ({ note, handleImpToggle }) => {
  return (
    <>
      <li>
        {note.content}
        <button onClick={handleImpToggle}>
          {note.important ? "mark not important" : "mark important"}
        </button>
      </li>
    </>
  );
};

export default Note;
