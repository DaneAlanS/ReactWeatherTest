import React, { useState, useEffect } from "react";

import Weather from "./weather";
import Search from "./search";

export default function App() {
  const [currentLocation, setLocation] = useState({
    city: "Norton",
    state: "Kansas"
  });

  return (
    <div className="app">
      <div className="bg-img"></div>
      <div className="page-wrapper">
        <Weather
          currentCity={currentLocation.city}
          currentState={currentLocation.state}
          updateLocation={setLocation}
        />
        <Search
          currentLocation={currentLocation}
          currentCity={currentLocation.city}
          currentState={currentLocation.state}
          updateLocation={setLocation}
        />
      </div>
    </div>
  );
}
