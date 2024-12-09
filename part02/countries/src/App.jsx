import { useEffect, useState } from "react";
import Search from "./components/Search";
import Body from "./components/Body";
import { getAllCountries } from "./services/dataManipulations";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCountryList, setAllCountryList] = useState([]);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getAllCountries().then((response) => setAllCountryList(response));
  }, []);

  useEffect(() => {
    setCountryList(
      allCountryList.filter((country) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <>
      <Search setSearchTerm={setSearchTerm} />
      <Body countryList={countryList} />
    </>
  );
}

export default App;
