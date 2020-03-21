import React, { Component } from "react";
import Axios from "axios";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherDescription: "",
      tempature: "",
      feelsLike: "",
      tempMax: "",
      tempMin: "",
      windSpeed: 0
    };
  }

  getWeatherItems() {
    const api = "56574a65ae2215c8ae6e414e5401c948";
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=4276452&appid=${api}`
    ).then(response => {
      const description = response.data.weather[0].description;
      const temp = Math.round((response.data.main.temp * 9) / 5 - 459.67);
      const feels = Math.round(
        (response.data.main.feels_like * 9) / 5 - 459.67
      );
      const dailyMax = Math.round(
        (response.data.main.temp_max * 9) / 5 - 459.67
      );
      const dailyMin = Math.round(
        (response.data.main.temp_min * 9) / 5 - 459.67
      );
      console.log(response.data.main);
      this.setState({ weatherDescription: description });
      this.setState({ tempature: temp });
      this.setState({ feelsLike: feels });
      this.setState({ tempMax: dailyMax });
      this.setState({ tempMin: dailyMin });
    });
  }

  componentDidMount() {
    this.getWeatherItems();
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="left-side">
          <h1>Current Weather</h1>
          <div className="weather-wrapper">
            <h2>{this.state.weatherDescription}</h2>
          </div>
        </div>
        <div className="right-side">
          <h2>Tempature: {this.state.tempature} F</h2>
          <h2>Feels like: {this.state.feelsLike} F</h2>
          <h2>High: {this.state.tempMax} F</h2>
          <h2>Low: {this.state.tempMin} F</h2>
        </div>
      </div>
    );
  }
}
