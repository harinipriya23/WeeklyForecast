import React, { useContext } from "react";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { WeatherContext } from "../context/WeatherContext";
import { WeatherIconMap } from "../images/bg";

const DailyForecast = ({ data }) => {
  const { sunriseTimee, loading , sunsetTimee, tempMin, tempMax } =
    useContext(WeatherContext);

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const currentDayInAWeek = new Date().getDay();
  const forecastDays = weekdays
    .slice(currentDayInAWeek, weekdays.length)
    .concat(weekdays.slice(0, currentDayInAWeek));

  return (
    <div className="flex flex-col mx-10 text-white animate">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-10 font-medium text-[14px] font-pop">
        <div className="flex gap-10">
          {" "}
          <div className="flex gap-1">
            <WiSunrise className="size-5" />
            <p>
              rise : <span>{sunriseTimee}</span>
            </p>
          </div>
          <div className="flex gap-1">
            <WiSunset className="size-5" />
            <p>
              set : <span>{sunsetTimee}</span>
            </p>
          </div>
        </div>
        <div className="flex gap-10 my-1">
          <div className="flex ">
            <FaLongArrowAltUp className="mt-1 size-3" />
            <p>
              high <span>{tempMax}~C</span>{" "}
            </p>
          </div>
          <div className="flex">
            <FaLongArrowAltDown className="mt-1 size-3" />
            <p>
              low <span>{tempMin}~C</span>
            </p>
          </div>
        </div>
      </div>
      {/* weeklyForecast */}
      {data ? (
        <div className="flex my-2 lg:mx-5 flex-col">
          <h1 className="uppercase text-xl">weekly forecast</h1>
          <hr className="w-full h-0.5 mt-3 bg-white" />
          <div className="grid bg-black/20 place-items-center justify-items-center rounded-2xl my-4
          grid-cols-1 lg:grid-cols-3">
            {/* {loading && 
              <div>  <h1 className="text-white text-xl">
              forecast details not found !
            </h1>
          </div> } */}
                {data?.list?.splice(1, 7).map((item, index) => (
                  <div
                    key={index}
                    className="place-items-center grid lg:grid-cols-1 grid-cols-4 p-5 ">
                    <div className="bg-transparent grid place-items-center">
                      <p className=" text-[15px] font-pop ">
                        {forecastDays[index]}
                      </p>
                    </div>
                    <div className="lg:grid lg:place-items-center">
                      <img
                        src={WeatherIconMap[item.weather[0].icon]}
                        className="size-6 "
                      />
                    </div>
                    <p className= " tracking-wider font-semibold text-[15px] mx-2">
                      {item.weather[0].description}
                    </p>
                    <p className="font-bold text-[15px]">
                      {Math.floor(item.main.temp)}
                    </p>
                  </div>
                ))}
              </div>
           </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DailyForecast;
