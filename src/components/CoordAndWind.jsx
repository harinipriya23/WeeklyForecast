import React, { useContext } from "react";
import { WiHumidity } from "react-icons/wi";
import { PiWindFill } from "react-icons/pi";
import { WeatherContext } from "../context/WeatherContext";

const CoordAndWind = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="flex flex-col justify-center items-center
     bg-black/30  rounded-2xl w-full my-5 gap-y-5 px-3 py-5 ">
      <div className="flex gap-20 text-lg">
        <p className="flex-col flex items-center ">
          Latitude <span>{weatherData.lat}</span>
        </p>
        <p className="flex flex-col text-center">
          Longitude <span>{weatherData.log}</span>
        </p>
      </div>

      <div className="flex items-center gap-20">
        <div className="flex flex-col items-center">
          <WiHumidity className=" size-10" />
          <p className="flex flex-col text-center">
            <span>{weatherData.humid}%</span>Humidity
          </p>
        </div>
        <div className="flex flex-col items-center">
          <PiWindFill className="size-9" />
          <p className="flex flex-col text-center">
            <span>{weatherData.windSpeed} km/h</span>Wind Speed
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoordAndWind;
