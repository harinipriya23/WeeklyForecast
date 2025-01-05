import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const InputDetails = () => {
  const { handleEnter, searchText, setSearchText } = useContext(WeatherContext);
  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  return (
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center px-10 py-5">
        <h1 className="text-[25px] md:text-4xl text-white mix-blend-plus-lighter font-bold">
          WeatherForecast
        </h1>
        <div>
          <input
          className="bg-black/30 w-full shadow-xl
             px-4 py-2 md:px-6 md:py-2 rounded-md text-white
          outline-none placeholder:text-white"
            placeholder="Location"
            value={searchText}
            onChange={handleSearch}
            onKeyDown={handleEnter}
          />
        </div>
       </div>
  );
};

export default InputDetails;
