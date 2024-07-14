import { createContext, useEffect, useState } from "react";
import { WeatherIconMap } from "../images/bg";
import { WeatherBgImage } from "../images/bg";
console.log(WeatherIconMap);
export const WeatherContext = createContext(null);
const WeatherContextProvider = ({ children }) => {
  let api_id = "afc100ed3f531b406f83af07b0919f31";
  let apiId = "83cb22f0452696aeae9598f53ecc673c";

  const [searchText, setSearchText] = useState("chennai");
  const [bgImg, setBgImg] = useState("");
  const [icon, setIcon] = useState();
  const [forecastData, setForecastData] = useState([]);
  const [feels_like, setFeels_like] = useState("");
  const [climate, setClimate] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("IN");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humid, setHumid] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);

  // forecast useState
  const [weeksIcon, setWeeksIcon] = useState();
  const [sunriseTimee, setSunRiseTime] = useState();
  const [sunsetTimee, setSunsetTime] = useState();
  const [tempMin, setTempMin] = useState();
  const [tempMax, setTempMax] = useState();

  const weatherFunctions = {
    handleEnter,
    searchText,
    setSearchText,
    icon,
    setIcon,
    forecastData,
    feels_like,
    setFeels_like,
    bgImg,
    setBgImg,
    climate,
    temp,
    city,
    country,
    lat,
    log,
    humid,
    windSpeed,
    error,
    loading,
    cityNotFound,
    weeksIcon,
    setWeeksIcon,
    sunsetTimee,
    sunriseTimee,
    tempMin,
    tempMax,
    setTempMin,
    setTempMax,
  };
  function handleEnter(e) {
    if (e.key === "Enter") {
      search();
    }
  }

  const search = async () => {
    setLoading(true);
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiId}&units=Metric`;
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&appid=${apiId}&units=Metric`;
    try {
      const res1 = await fetch(weatherUrl);
      const res2 = await fetch(forecastUrl);
      const data = await res1.json();
      const data2 = await res2.json();
      console.log(data);
      console.log(data2);
      if (data.cod === "404") {
        console.log("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      const date = new Date();
      console.log(date);
      const dateObj = new Date(data.sys.sunrise * 1000);
      const sunriseTime = dateObj.toLocaleTimeString();
      const dateObjSet = new Date(data.sys.sunset * 1000);
      const sunsetTime = dateObjSet.toLocaleTimeString();

      console.log(sunsetTime);
      console.log(sunriseTime);
      setSunRiseTime(sunriseTime);
      setSunsetTime(sunsetTime);
      // weather
      setCityNotFound(false);
      setTemp(Math.floor(data.main.temp));
      setFeels_like(Math.floor(data.main.feels_like));
      setTempMin(Math.floor(data.main.temp_min));
      setTempMax(Math.floor(data.main.temp_max));
      setClimate(data.weather[0].main);
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      setHumid(data.main.humidity);
      setWindSpeed(data.wind.speed);
      const weatherIconCode = data.weather[0].icon;
      setIcon(WeatherIconMap[weatherIconCode]);
      setBgImg(WeatherBgImage[weatherIconCode]);
      setForecastData(data2);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search();
  }, []);
  return (
    <WeatherContext.Provider value={weatherFunctions}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContextProvider;
