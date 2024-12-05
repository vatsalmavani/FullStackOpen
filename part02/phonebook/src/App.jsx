import { useState } from "react";
import Numbers from "./components/Numbers";
import Add from "./components/Add";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 0 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 1 },
    { name: "Dan Abramov", number: "12-43-234345", id: 2 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 3 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const hasName = (newName) => {
    for (const obj of persons) {
      if (obj.name === newName) return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewName("");
    setNewNum("");
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
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <h2>Phonebook</h2>
      <Add
        handleChangeName={handleChangeName}
        handleChangeNum={handleChangeNum}
        handleSubmit={handleSubmit}
        newName={newName}
        newNum={newNum}
      />
      <h2>Numbers</h2>
      <Numbers searchTerm={searchTerm} persons={persons} />
    </div>
  );
};

export default App;
