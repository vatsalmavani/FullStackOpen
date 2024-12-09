import { useEffect, useState } from "react";
import Note from "./components/Note.jsx";
import Notification from "./components/Notification.jsx";
import { getAll, create, update } from "./services/notes.js";

function App() {
  const [notes, setNotes] = useState([]);
  const [currNote, setCurrNote] = useState("");
  const [showImp, setShowImp] = useState(false);
  const [errorMessage, setError] = useState(null);

  useEffect(() => {
    getAll().then((response) => setNotes(response));
  }, []);

  const handleShowImp = () => setShowImp(!showImp);

  const handleChange = (event) => setCurrNote(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    create(currNote).then((response) => setNotes(notes.concat(response)));
    setCurrNote("");
    // console.log(notes);
    /**IMP note:
    * notes object updates Asynchronously
    hence, notes.concat's effect won't be visible here
    */
  };

  const handleImpToggle = (note) => {
    update(note)
      .then((response) =>
        setNotes(notes.map((n) => (note.id === n.id ? response : n)))
      )
      .catch((error) => {
        getAll().then((response) =>
          setNotes(response.filter((n) => n.id !== note.id))
        );
        setError(`the note was already deleted`);
        setTimeout(() => setError(null), 3000);
      });
  };

  const notesToShow = showImp ? notes.filter((note) => note.important) : notes;

  return (
    <>
      <h1>Notes</h1>
      <Notification errorMessage={errorMessage} />
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            handleImpToggle={() => handleImpToggle(note)}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Note:
          <input type="text" value={currNote} onChange={handleChange} />
        </label>
        <button type="submit">add note</button>
      </form>
      <label>
        Only show important notes?
        <input type="checkbox" value={showImp} onChange={handleShowImp} />
      </label>
    </>
  );
}

export default App;
