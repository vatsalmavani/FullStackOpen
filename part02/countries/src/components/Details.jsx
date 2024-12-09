import axios from "axios";
import { useState, useEffect } from "react";
import List from "./List.jsx";
import Weather from "./Weather.jsx";

export default function Details({ country }) {
  const [c, setC] = useState(null);
  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
      .then((response) => setC(response));
  }, [country]);

  if (!c) return <>Loading...</>;
  return (
    <>
      <h1>{c.data.name.common}</h1>
      <b>capital: </b>
      {c.data.capital}
      <br />
      <b>area: </b>
      {c.data.area}
      <br />
      <b>languages:</b>
      <List list={Object.values(c.data.languages)} />
      <img src={c.data.flags.png} />
      <Weather country={c} />
    </>
  );
}
