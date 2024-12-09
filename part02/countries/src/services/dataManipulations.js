import axios from "axios";

const getAllCountries = () =>
  axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then((response) => response.data.map((item) => item.name.common));

export { getAllCountries };
