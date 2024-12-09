import { useEffect, useState } from "react";
import Numbers from "./components/Numbers";
import Add from "./components/Add";
import Search from "./components/Search";
import Notification from "./components/Notification";
import {
  getAllNumbers,
  addNumber,
  deleteNumber,
  replaceNumber,
} from "./services/numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  useEffect(() => {
    getAllNumbers().then((response) => setPersons(response));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    const hasName = (newName) => {
      for (const obj of persons) {
        if (obj.name === newName) return true;
      }
      return false;
    };

    const handleReplace = (newName, newNum) => {
      let person = persons.find((person) => person.name === newName);
      person = { ...person, number: newNum };
      replaceNumber(person).then((response) => {
        setPersons(persons.map((p) => (person.id === p.id ? response : p)));
        showNotification(`${person.name}'s number changed!`);
      });
    };

    event.preventDefault();

    if (hasName(newName)) {
      const replace = confirm(
        `${newName} already added in the phonebook. Replace old number?`
      );
      if (replace) {
        handleReplace(newName, newNum);
        setNewName("");
        setNewNum("");
      }
      return;
    }

    const newPerson = { name: newName, number: newNum };
    addNumber(newPerson).then((response) => {
      setPersons(persons.concat(response));
      showNotification(`Added ${newName} to phonebook!`);
    });
    setNewName("");
    setNewNum("");
  };

  const handleChangeName = (event) => setNewName(event.target.value);

  const handleChangeNum = (event) => setNewNum(event.target.value);

  const handleDelete = (person) => {
    const del = confirm(`Delete ${person.name}?`);
    if (del) {
      deleteNumber(person.id)
        .then((response) => {
          showNotification(`${person.name} has been deleted!`);
          setPersons(persons.filter((p) => p.id !== response.id));
        })
        .catch((error) => {
          showNotification(`error: ${person.name} has already been deleted!`);
          setPersons(persons.filter((p) => p.id !== person.id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <Add
        handleChangeName={handleChangeName}
        handleChangeNum={handleChangeNum}
        handleSubmit={handleSubmit}
        newName={newName}
        newNum={newNum}
      />
      <h2>Numbers</h2>
      <Numbers
        searchTerm={searchTerm}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
