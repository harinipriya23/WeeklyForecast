import React, { useContext } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { WeatherContext } from "../context/WeatherContext";
import { WeatherIconMap } from "../images/bg";

const WeeklyForecast = () => {
  const { forecastData, weatherData, dateAndDay, } = useContext(WeatherContext);

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const currentDayInAWeek = dateAndDay;
  const forecastDays = weekdays
    .slice(currentDayInAWeek, weekdays.length)
    .concat(weekdays.slice(0, currentDayInAWeek));

  return (
    <div className="flex flex-col gap-5 animate">
      <div className="flex justify-center gap-10  my-1">
        <div className="flex gap-1 text-lg">
          <FaLongArrowAltUp className="mt-1 size-5" />
          <p>
            Max <span>{weatherData.max_temp}°C</span>
          </p>
        </div>
        <div className="flex gap-1 text-lg">
          <FaLongArrowAltDown className="mt-1 size-5" />
          <p>
            Min <span>{weatherData.min_temp}°C</span>
          </p>
        </div>
      </div>
      {/* weeklyForecast */}

      <div className="flex flex-col">
        <h1 className="uppercase font-bold text-2xl">weekly forecast</h1>
        <hr className="w-full h-0.5 mt-3 bg-white" />
        {forecastData ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 my-10 gap-5">
            {forecastData?.list?.slice(1, 8).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 bg-black/30
                p-5 rounded-lg hover:scale-105 duration-300"
              >
                <p className="font-semibold text-xl">{forecastDays[index]}</p>
                <img
                  src={WeatherIconMap[item.weather[0].icon]}
                  className="size-10"
                />
                <p className="font-medium text-center h-8 text-sm ">
                  {item.weather[0].description}
                </p>
                <p className="font-semibold text-xl mt-1">{item.main.temp}°C</p>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="capitalize text-xl">forecast details not found !</h1>
        )}
      </div>
    </div>
  );
};

export default WeeklyForecast;
