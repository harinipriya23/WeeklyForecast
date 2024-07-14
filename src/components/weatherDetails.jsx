import React, { useContext } from "react";
import InputDetails from "./Inputdetails";
import ForecastDetails from "./ForecastDetails";
import { WeatherContext } from "../context/WeatherContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
const WeatherDetails = () => {
  const { error, cityNotFound, loading } = useContext(WeatherContext);
  return (
    <>
      <div className="flex flex-col px-5 py-3 rounded-3xl h-full ani">
        <div className="flex flex-col sm:grid sm:grid-cols-2 mt-2">
          <div className="text-2xl flex justify-between md:text-3xl
           text-white tracking-wide font-light ">
            <h1 className="font-bold p-2">
              Weather<span>Forecast</span>
            </h1>
          </div>
          <div className="flex mt-4 sm:mt-2 text-center">
            <InputDetails />
          </div>
        </div>
        <div className="shadow h-full my-10 mx-5 md:mx-10 rounded-xl ">
          <div className="flex flex-col items-center ">
            {cityNotFound ? (
              <h1 className="text-2xl text-white font-semibold capitalize m-2 text-center">
                city not found !
              </h1>
            ) : (
             
            <div className="h-full w-full">
            {loading ? (
              <div className="flex w-full justify-center m-2 ">
                <AiOutlineLoading3Quarters className="size-6 rounded-full text-white spinner" />
              </div>
            ) : (
              <ForecastDetails />
            )}</div>)}
          </div>
        </div>
              </div>
    </>
  );
};

export default WeatherDetails;
