import React, { useState, useEffect } from "react";
import Axios from "axios";

function Weather() {
  const [weatherDesc, setWeatherDesc] = useState("");
  const [tempature, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [tempMax, setMax] = useState("");
  const [tempMin, setMin] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  function getWeatherItems() {
    const apikey = "56574a65ae2215c8ae6e414e5401c948";
    function convertKelvin(weatherData) {
      return Math.round((weatherData * 9) / 5 - 459.67);
    }
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=4276452&appid=${apikey}`
    ).then(response => {
      const description = response.data.weather[0].description;
      const temp = convertKelvin(response.data.main.temp);
      const feels = convertKelvin(response.data.main.feels_like);
      const dailyMax = convertKelvin(response.data.main.temp_max);
      const dailyMin = convertKelvin(response.data.main.temp_min);

      setWeatherDesc(description);
      setTemp(temp);
      setFeelsLike(feels);
      setMax(dailyMax);
      setMin(dailyMin);

      console.log(response.data);
    });
  }

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    getWeatherItems();
  });

  return (
    <div className="content-wrapper">
      <div className="left-side">
        <h1>Norton, Kansas</h1>
        <h1>{weatherDesc}</h1>
        <div className="weather-wrapper">
          <h2>Tempature: {tempature} F</h2>
        </div>
      </div>
      <div className="right-side">
        <h2>Feels like: {feelsLike} F</h2>
        <h2>High: {tempMax} F</h2>
        <h2>Low: {tempMin} F</h2>
      </div>
    </div>
  );
}

export default Weather;
