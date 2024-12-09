import { useState } from "react";
import Details from "./Details.jsx";

export default function CountryList({ countryList }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <>
      <ul>
        {countryList.map((country) => (
          <li key={country}>
            {country}
            <button onClick={() => setSelectedCountry(country)}>show</button>
          </li>
        ))}
      </ul>
      {selectedCountry && <Details country={selectedCountry} />}
    </>
  );
}
