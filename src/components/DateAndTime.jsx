import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
const DateAndTime = () => {
  const { dateAndDay } = useContext(WeatherContext);
  return (
    <div className="flex flex-col gap-2 items-center font-semibold text-2xl">
      <p>{dateAndDay.date}</p>
      <p>{ dateAndDay.day}</p>
    </div>
  );
};

export default DateAndTime;
