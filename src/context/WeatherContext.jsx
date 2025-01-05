import { createContext, useEffect, useState } from "react";
import { WeatherIconMap, WeatherBgImage } from "../images/bg";

export const WeatherContext = createContext(null);

const WeatherContextProvider = ({ children }) => {
  let API_ID = "83cb22f0452696aeae9598f53ecc673c";

  const [searchText, setSearchText] = useState("new delhi");
  const [bgImg, setBgImg] = useState("");
  const [icon, setIcon] = useState(null);
  const [weeksIcon, setWeeksIcon] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [dateAndDay, setDateAndDay] = useState({
    date: "",
    day: "",
  });
  const [weatherData, setWeatherData] = useState({
    temp: 0,
    min_temp: 0,
    max_temp:0,
    feels_like: "",
    climate: "",
    city: "",
    country: "IN",
    lat: 0,
    log: 0,
    humid: 0,
    windSpeed: 0,
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [forecastNotFound, setForecastNotFound] = useState(false)

  const weatherFunctions = {
    handleEnter,
    searchText,
    setSearchText,
    icon,
    setIcon,
    forecastData,
    bgImg,
    setBgImg,
    error,
    loading,
    cityNotFound,
    weeksIcon,
    setWeeksIcon,
    weatherData,
    dateAndDay,forecastNotFound
  };

  function handleEnter(e) {
    if (e.key === "Enter") {
      search();
    }
  }

  const search = async () => {
    setLoading(true);
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_ID}&units=Metric`;
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&appid=${API_ID}&units=Metric`;
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        fetch(weatherUrl),
        fetch(forecastUrl),
      ]);

      const currentWeatherData = await weatherResponse.json();
      const forecastWeatherData = await forecastResponse.json();

      console.log("Current Weather Data:", currentWeatherData);
      console.log("Forecast Weather Data:", forecastWeatherData);

      if (currentWeatherData.cod === "404") {
        console.log("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      if (forecastWeatherData.cod === "404") {
        console.log("forecast not found");
        setForecastNotFound(true);
        setLoading(false);
        return;
      }
      const localTimeMs =
        (currentWeatherData.dt + currentWeatherData.timezone) * 1000;
      const localTime = new Date(localTimeMs);

      const date = localTime.toLocaleDateString("en-US", {
        year: "numeric",
        day: "numeric",
        month: "long",
      });
      const day = localTime.toLocaleDateString("en-US", { weekday: "long" });

      setDateAndDay({
        date: date,
        day: day,
      });
      setWeatherData({
        temp: Math.floor(currentWeatherData.main.temp),
        min_temp: Math.floor(currentWeatherData.main.temp_min),
        max_temp: Math.floor(currentWeatherData.main.temp_max),
        feels_like: Math.floor(currentWeatherData.main.feels_like),
        climate: currentWeatherData.weather[0].main,
        city: currentWeatherData.name,
        country: currentWeatherData.sys.country,
        lat: currentWeatherData.coord.lat,
        log: currentWeatherData.coord.lon,
        humid: currentWeatherData.main.humidity,
        windSpeed: currentWeatherData.wind.speed,
      });

      const weatherIconCode = currentWeatherData.weather[0].icon;
      setIcon(WeatherIconMap[weatherIconCode]);
      setBgImg(WeatherBgImage[weatherIconCode]);
      setForecastData(forecastWeatherData);
      setCityNotFound(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (searchText.trim()) {
      search();
    }
  }, []);
  return (
    <WeatherContext.Provider value={weatherFunctions}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContextProvider;
