import { useState } from "react";
import Note from "./components/Note.jsx";

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [currNote, setCurrNote] = useState("");
  const [showImp, setShowImp] = useState(false);

  const handleShowImp = () => setShowImp(!showImp);

  const handleChange = (event) => setCurrNote(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      id: notes.length + 1,
      content: currNote,
      important: Math.random() < 0.5,
    };
    setNotes(notes.concat(newNote));
    setCurrNote("");
    console.log(notes); /**IMP note:
    * notes object updates Asynchronously
    hence, notes.concat's effect won't be visible here
    */
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {showImp
          ? notes
              .filter((note) => note.important)
              .map((note) => <Note key={note.id} note={note} />)
          : notes.map((note) => <Note key={note.id} note={note} />)}
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
    </div>
  );
}

export default App;
