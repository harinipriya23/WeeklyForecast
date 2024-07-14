// background images
import clearSky from "./Dclearsky.jpg";
import NclearSky from "./Nclearsky.jpg";

import clouds from "./Dclouds.webp";
import Nclouds from "./Nclouds.jpg";

import brokenClouds from "./DbrokenClouds.jpg";
import NbrokenClouds from "./NbrokenClouds.jpg";

import scatteredClouds from "./DscatteredClouds.webp";
import NscatteredClouds from "./NscatteredClouds.jpg";

import rain from "./Drain.webp";
import Nrain from "./Nrain.jpg";

import showerRain from "./DshowerRain.jpg";
import NshowerRain from "./NshowerRain.jpg";

import mist from "./Dmist.webp";
import Nmist from "./Nmist.webp";

import snow from "./Dsnow.jpg";
import Nsnow from "./Dsnow.jpg";

import thunderStorm from "./DthunderStorm.avif";
import NthunderStorm from "./NthunderStorm.webp";

// weather icons
import sunIcon from "./icons/sun.png";
import nightIcon from "./icons/night.png";
import d2 from "./icons/2d.png";
import n2 from "./icons/2n.png";
import d3 from "./icons/3d.png";
import d4 from "./icons/4d.png";
import n3 from "./icons/3n.png";
import n4 from "./icons/4n.png";
import d9 from "./icons/9d.png";
import n9 from "./icons/9n.png";
import d10 from "./icons/10d.png";
import n10 from "./icons/10n.png";
import d11 from "./icons/11d.png";
import n11 from "./icons/11n.png";
import d13 from "./icons/13d.png";
import n13 from "./icons/13n.png";
import n50 from "./icons/50n.png";
import d50 from "./icons/50d.png";

export const BgImages = {
  clearSky,
  NclearSky,
  clouds,
  Nclouds,
  brokenClouds,
  NbrokenClouds,
  scatteredClouds,
  NscatteredClouds,
  rain,
  Nrain,
  showerRain,
  NshowerRain,
  mist,
  Nmist,
  snow,
  Nsnow,
  thunderStorm,
  NthunderStorm,
};
export const WeatherIcons = {
  sunIcon,
  nightIcon,
  d2,
  d3,
  d4,
  d9,
  d10,
  d11,
  d13,
  d50,
  n2,
  n3,
  n4,
  n9,
  n10,
  n11,
  n13,
  n50,
};
export const WeatherIconMap = {
  "01d": sunIcon,
  "01n": nightIcon,
  "02d": d2,
  "02n": n2,
  "03d": d3,
  "03n": n3,
  "04d": d4,
  "04n": n4,
  "09d": d9,
  "09n": n9,
  "10d": d10,
  "10n": n10,
  "11d": d11,
  "11n": n11,
  "13d": d13,
  "13n": n13,
  "50d": d50,
  "50n": n50,
};
export const WeatherBgImage = {
  "01d": clearSky,
  "01n": NclearSky,
  "02d": clouds,
  "02n": Nclouds,
  "03d": scatteredClouds,
  "03n": NscatteredClouds,
  "04d": brokenClouds,
  "04n": NbrokenClouds,
  "09d": showerRain,
  "09n": NshowerRain,
  "10d": rain,
  "10n": Nrain,
  "11d": thunderStorm,
  "11n": NthunderStorm,
  "13d": snow,
  "13n": Nsnow,
  "50d": mist,
  "50n": Nmist,
};
