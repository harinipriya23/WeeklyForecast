import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const Climate = () => {
  const { weatherData, icon } = useContext(WeatherContext);

  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-center
 py-3 gap-4 w-full sm:gap-10 "
    >
      <div className="w-36 sm:w-56 h-36">
        <img src={icon} className="w-full h-full " />
      </div>
      <div
        className="flex flex-col items-center justify-center text-center text-white 
        w-full rounded-2xl bg-black/30 py-6 font-bold uppercase"
      >
        <p className="text-3xl">{weatherData.temp}°C</p>
        <p className="text-2xl">{weatherData.city}</p>
        <p className="text-xl">{weatherData.country}</p>
        <p className="mb-4 font-semibold text-md ">
          feels_like : <span>{weatherData.feels_like}°C</span>
        </p>
        <hr className="w-3/4 h-0.5 bg-white" />
        <p className="mt-2 tracking-wider text-2xl font-semibold">
          {weatherData.climate}
        </p>
      </div>
    </div>
  );
};

export default Climate;
