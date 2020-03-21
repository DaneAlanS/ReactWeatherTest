import React, { Component } from "react";
import Weather from "./weather";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="bg-img"></div>
        <div className="page-wrapper">
          <Weather />
        </div>
      </div>
    );
  }
}
