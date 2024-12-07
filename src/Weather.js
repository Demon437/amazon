import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { use } from "react";

function Weather() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const handelciychange = (event) => {
    setCity(event.target.value);
  };
  const featchWeather = async () => {
    try {
      const Response = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"0e74f2e27360a72411b175429f723807"}`
        )
        .setWeather(Response);
    } catch (error) {
      console.log("error featching weather data", error);
    }
  };

  const handelclick = () => {
    featchWeather();
  };

  return (
    <div className="Weather-container">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={handelciychange}
      />
      <button onClick={handelclick}>Weather</button>
      {Weather && (
        <>
          <div className="wearher-info">
            <h2></h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
