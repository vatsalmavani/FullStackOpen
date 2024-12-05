import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 0 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 1 },
    { name: "Dan Abramov", number: "12-43-234345", id: 2 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 3 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const hasName = (newName) => {
    for (const obj of persons) {
      if (obj.name === newName) return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (hasName(newName)) {
      alert(`${newName} already exists in the phonebook`);
      return;
    }

    const newPerson = { name: newName, id: persons.length, number: newNum };
    setPersons(persons.concat(newPerson));
  };

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNum = (event) => {
    setNewNum(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleChangeNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((obj) => (
          <div key={obj.id}>
            {obj.name}: {obj.number}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
