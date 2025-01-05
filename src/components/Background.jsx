import React from "react";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const Background = () => {
  const { bgImg } = useContext(WeatherContext);
  return (
    <div className="h-full animate">
      <div
        className="absolute bg-black inset-0 bg-cover bg-center bg-no-repeat 
         mix-blend-overlay ani "
        style={{ backgroundImage: `url(${bgImg})`, backgroundColor: "black" }}
      />
    </div>
  );
};

export default Background;
