import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const DateAndCountry = () => {
  const { temp, city, country, icon, climate, feels_like } =
    useContext(WeatherContext);

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex justify-center items-center mt-5 gap-10 ">
        <div className="flex items-center w-24 h-24  rounded ">
          <img
            src={icon}
            className=" w-full h-full "
          />
        </div>
        <div
          className="text-center text-white flex flex-col items-center justify-center 
         font-pop  w-52 md:w-60 rounded-2xl bg-black/30"
        >
          <p className="md:text-[30px] text-[20px] font-bold mt-3 text-white">
            {Math.floor(temp)}~C
          </p>
          <p className="md:text-[30px] text-[23px] font-bold  uppercase text-white ">{city}</p>
          <p className="md:text-[20px] font-bold tracking-wider uppercase text-white">
            {country}
          </p>
          <p className="mb-2 uppercase text-base font-pop font-medium">
            feels_like : <span>{Math.floor(feels_like)}~C</span>
          </p>
          <hr className="w-3/4 h-0.5 bg-white" />
          <p className="mt-2 tracking-widest uppercase text-2xl mb-3 font-pop font-semibold">
            {climate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateAndCountry;
