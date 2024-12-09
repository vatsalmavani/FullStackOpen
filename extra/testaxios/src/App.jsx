import axios from "axios";
import { useState } from "react";

function App() {
  const [bull, setBull] = useState(true);

  axios
    .get("http://localhost:3001/notes")
    .then((response) => setBull(response.data[0].important));

  return <>nothing to see here asshole</>;
}

export default App;
