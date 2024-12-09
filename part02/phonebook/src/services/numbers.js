import axios from "axios";

const baseURL = "http://localhost:3001/persons";

const getAllNumbers = () =>
  axios.get(baseURL).then((response) => response.data);

const addNumber = (newPerson) =>
  axios.post(baseURL, newPerson).then((response) => response.data);

const deleteNumber = (id) =>
  axios.delete(`${baseURL}/${id}`).then((response) => response.data);

const replaceNumber = (person) =>
  axios
    .put(`${baseURL}/${person.id}`, person)
    .then((response) => response.data);

export { getAllNumbers, addNumber, deleteNumber, replaceNumber };
