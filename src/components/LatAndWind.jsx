import React, { useContext } from "react";
import { WiHumidity } from "react-icons/wi";
import { PiWindFill } from "react-icons/pi";
import { WeatherContext } from "../context/WeatherContext";

const LatAndWind = () => {
  const { lat, log, humid, windSpeed } = useContext(WeatherContext);

  return (
    <div className="flex flex-col my-5 justify-center ic mx-10  py-5 
     bg-black/30  rounded-3xl">
      <div className="flex gap-20 mt-1 font-medium justify-evenly 
        text-white text-[15px] font-pop text-center">
        <p className="flex-col flex">
          Latitude <span>{lat}</span>
        </p>
        <p className="flex flex-col">
          Longitude <span>{log}</span>
        </p>
      </div>

      <div className="flex gap-14 w-full items-center justify-evenly text-white mt-3 ">
        <div className="flex flex-col m-2 font-medium justify-center items-center">
          <WiHumidity className=" size-10" />
          <p className="flex flex-col text-center">
            <span>{humid}%</span>Humidity
          </p>
        </div>
        <div className="flex flex-col m-2 font-medium justify-center items-center">
          <PiWindFill className="size-9" />
          <p className="flex flex-col text-center">
            <span>{windSpeed}km/h</span>Wind Speed
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatAndWind;
