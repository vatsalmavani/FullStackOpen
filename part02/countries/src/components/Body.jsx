import CountryList from "./CountryList.jsx";
import Details from "./Details.jsx";

export default function Body({ countryList }) {
  if (countryList.length > 10) {
    return <>Too many matches! Type few more characters</>;
  } else if (countryList.length > 1) {
    return (
      <>
        <CountryList countryList={countryList} />
      </>
    );
  } else if (countryList.length === 1) {
    return (
      <>
        <Details country={countryList[0]} />
      </>
    );
  } else {
    return <>No matching country</>;
  }
}
