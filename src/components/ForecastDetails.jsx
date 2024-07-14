import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import DateAndCountry from "./DateAndCountry";
import LatAndWind from "./LatAndWind";
import DailyForecast from "./DailyForecast";
import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const ForecastDetails = () => {
  const { forecastData } = useContext(WeatherContext);
  // const [currentTime, setCurrentTime] = useState(new Date());

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    " August",
    "September",
    "October",
    "November",
    "December",
  ];
  const current = new Date();
  const day = weekdays[current.getDay()];
  const month = months[current.getMonth()];
  const date = current.getDate();
  const year = current.getFullYear();
  const hrs = current.getHours();
  const mins = current.getMinutes();
  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  const zeroInBefore = (zero) => {
    return zero < 10 ? `0${zero}` : zero;
  };
  //    useEffect(() =>{
  //     const timer = setInterval(() =>{
  //      setCurrentTime(new Date());
  //     },1000)
  //     return ()=> clearInterval(timer)
  //  },[]);

  return (
    <>
      <div className="flex flex-col m-auto">
        <h1 className="capitalize mt-5 text-lg lg:text-2xl sm:text-2xl text-white text-center">
          {day}, {date} {month} {year} |{" "}
          <span>
            Local time : {zeroInBefore(formatHour(hrs))} :{zeroInBefore(mins)}{" "}
            {hrs >= 12 ? "PM" : "AM"}
          </span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
          <div className="flex flex-col col-span-5">
            <DateAndCountry />
            <LatAndWind />
          </div>
          <div className="flex flex-col col-span-7">
            {forecastData ? (
              <DailyForecast data={forecastData} />
            ) : (
              <div className="flex justify-center m-2 ">
                <AiOutlineLoading3Quarters className="size-8 rounded-full text-white  spinner" />
              </div>
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForecastDetails;
