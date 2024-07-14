import React, { useContext } from "react";
import WeatherDetails from "./components/weatherDetails";
import { WeatherContext } from "./context/WeatherContext";

const App = () => {
  const { bgImg } = useContext(WeatherContext);
  return (
    <div className="relative pb-10 md:pb-15 max-w-full bg-slate-800/20  overflow-hidden w-full">
      <img
        src={bgImg}
        className="inset-0 absolute object-cover mix-blend-overlay filter blur-md h-full w-full"
      />

      {/* <div className='bg-gradient-to-tr from-blue-500 to-sky-500'> */}
      <WeatherDetails />
    </div>
  );
};

export default App;
