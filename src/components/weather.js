import React, { useState, useEffect } from "react";
import Axios from "axios";

function Weather(props) {
  const [weatherDesc, setWeatherDesc] = useState("");
  const [tempature, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weatherIcon, setIcon] = useState("");

  function getWeatherItems() {
    const apikey = "2db9808f71504529d950a1129df05b4e";
    // function convertKelvin(weatherData) {
    //   return Math.round((weatherData * 9) / 5 - 459.67);
    // }
    Axios.get(
      `http://api.weatherstack.com/current?access_key=${apikey}&query=${props.newCity},${props.newState}&units=f`
    )
      .then(response => {
        const current = response.data.current;
        console.log(response);

        setWeatherDesc(current.weather_descriptions[0]);
        setTemp(current.temperature);
        setFeelsLike(current.feelslike);
        setWindSpeed(current.wind_speed);
        setWindDirection(current.wind_dir);
        setHumidity(current.humidity);
        props.setDayNight(current.is_day);
        setIcon(current.weather_icons[0]);
      })
      .catch(console.log("API NOT SUCCESSFULL"));
    console.log(
      `http://api.weatherstack.com/current?access_key=${apikey}&query=${props.newCity},${props.newState}&units=f`
    );
  }

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    if (props.isSubmitted === true) {
      console.log("submission weather.js");
      getWeatherItems();
      props.setSubmission(false);
    }
  });

  function contentWrapperColor() {
    if (props.dayNight == "no") {
      console.log("night");
      return "content-wrapper night";
    } else {
      console.log("day");
      return "content-wrapper day";
    }
  }

  return (
    <div className={contentWrapperColor()}>
      <div
        className="left-side"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${weatherIcon})`
        }}
      >
        <h1>
          {props.currentCity}, {props.currentState}
        </h1>
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
