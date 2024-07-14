import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { WeatherContext } from "../context/WeatherContext";
import { useState } from "react";


const InputDetails = () => {
  const { handleEnter, searchText, setSearchText } = useContext(WeatherContext);
  function handleSearch(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="flex h-full w-full">
      <input
        className="relative w-full mx-4  sm:w-1/2  h-[25px] rounded-3xl p-5 px-10 hover:shadow-xl 
          outline-none placeholder:capitalize
          placeholder:text-slate-500 placeholder:text-md  placeholder:font-pop "
        placeholder="search city here"
        value={searchText}
        onChange={handleSearch}
        onKeyDown={handleEnter}
      />
      <FaSearch className="absolute size-5 mx-7 my-3 text-gray-600 rounded-full  " />
    </div>
  );
};

export default InputDetails;
