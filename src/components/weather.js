import React, { useState, useEffect } from "react";
import Axios from "axios";

function Weather(props) {
  const [weatherDesc, setWeatherDesc] = useState("");
  const [tempature, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [humidity, setHumidity] = useState("");
  const [dayNight, setDayNight] = useState("");
  const [weatherIcon, setIcon] = useState("");

  function getWeatherItems() {
    const apikey = "128bdf45e8a3726c1a2aaa7911146bbc";
    // function convertKelvin(weatherData) {
    //   return Math.round((weatherData * 9) / 5 - 459.67);
    // }
    Axios.get(
      `http://api.weatherstack.com/current?access_key=${apikey}&query=${props.currentCity},${props.currentState}&units=f`
    ).then(response => {
      const current = response.data.current;
      console.log(response);

      const weatherDesc = setWeatherDesc(current.weather_descriptions[0]);
      const tempature = setTemp(current.temperature);
      const feelsLike = setFeelsLike(current.feelslike);
      const windSpeed = setWindSpeed(current.wind_speed);
      const windDirection = setWindDirection(current.wind_dir);
      const humidity = setHumidity(current.humidity);
      const dayNight = setDayNight(current.is_day);
      const weatherIcon = setIcon(current.weather_icons[0]);
    });
  }

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    getWeatherItems();
  });

  return (
    <div className="content-wrapper">
      <div
        className="left-side"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${weatherIcon})`
        }}
      >
        <h1>Norton, Kansas</h1>
        <h3>Current Weather</h3>
        <h2>{weatherDesc}</h2>
        <div className="weather-wrapper">
          <h2>Tempature: {tempature} F</h2>
        </div>
      </div>
      <div className="right-side">
        <h2>Feels like: {feelsLike} F</h2>
        <h2>Wind speed: {windSpeed} MPH</h2>
        <h2>Wind direction: {windDirection}</h2>
        <h2>Humidity: {humidity}% </h2>
      </div>
    </div>
  );
}

export default Weather;
