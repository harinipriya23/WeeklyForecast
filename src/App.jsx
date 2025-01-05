import React, { useContext } from "react";
import InputDetails from "./components/Inputdetails";
import ForecastDetails from "./components/ForecastDetails";
import Background from "./components/Background";
import WeeklyForecast from "./components/WeeklyForecast";
import { WeatherContext } from "./context/WeatherContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const App = () => {
  const { cityNotFound, loading } = useContext(WeatherContext);
  return (
    <div className="relative min-h-screen flex flex-col">
      <Background />
      <div className="flex flex-col z-10 animate">
        <InputDetails />
        {loading ? (
          <div className="flex w-full h-screen justify-center items-center m-2 ">
            <AiOutlineLoading3Quarters className="size-7 rounded-full text-white spinner" />
          </div>
        ) : (
          <div
            className="flex flex-col items-center lg:flex-row mx-10 md:px-10 py-5 md:gap-10
     bg-black/30 rounded-lg mb-10 shadow"
          >
            <ForecastDetails />
            {!cityNotFound && <WeeklyForecast />}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
