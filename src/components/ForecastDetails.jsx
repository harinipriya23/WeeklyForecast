import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Climate from "./Climate";
import CoordAndWind from "./CoordAndWind";
import DateAndTime from "./DateAndTime";
const ForecastDetails = () => {
  const { cityNotFound,} = useContext(WeatherContext);

  return (
    <div className="flex flex-col items-center">
      {cityNotFound ? (
        <h1 className="text-2xl font-semibold capitalize m-2 text-center">
          Oops! city not found
        </h1>
      ) : (
        <div className="w-96">
          <DateAndTime />
          <Climate />
          <CoordAndWind />
        </div>
      )}
    </div>
  );
};

export default ForecastDetails;
