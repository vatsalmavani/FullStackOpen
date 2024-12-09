import axios from "axios";
import { useEffect, useState } from "react";

export default function Weather({ country }) {
  const [weather, setWeather] = useState(null);

  const getWeatherURL = `https://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_WEATHER_KEY
  }&q=${country.data.capital}`;

  useEffect(() => {
    axios.get(getWeatherURL).then((response) => {
      setWeather(response.data);
    });
  }, []);

  if (!weather)
    return (
      <>
        <h2>Weather in {country.data.capital}:</h2>
        Loading...
      </>
    );

  return (
    <>
      <h2>Weather in {country.data.capital}:</h2>
      <b>temp (*C): </b>
      {weather.current.temp_c}
      <br />
      <b>wind: </b>
      {weather.current.wind_kph} km/h
      <br />
      <img src={`${weather.current.condition.icon}`} />
    </>
  );
}
