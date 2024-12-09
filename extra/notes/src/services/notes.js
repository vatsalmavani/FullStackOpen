import axios from "axios";

const baseURL = "http://localhost:3001/notes";

const getAll = () =>
  axios.get(baseURL).then((response) =>
    response.data.concat({
      important: false,
      id: 100,
      content: "this note actually doesn't exist in the database",
    })
  );

const create = async (newNoteContent) => {
  const newNote = {
    content: newNoteContent,
    important: Math.random() < 0.5,
  };
  // return axios.post(baseURL, newNote).then((response) => response.data);
  const response = await axios.post(baseURL, newNote);
  return response.data;
};

const update = (note) =>
  axios
    .patch(`${baseURL}/${note.id}`, { important: !note.important })
    .then((response) => response.data);

export { getAll, create, update };
