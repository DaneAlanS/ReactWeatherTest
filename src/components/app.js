import React, { useState, useEffect } from "react";

import Weather from "./weather";
import Search from "./search";

export default function App() {
  const [currentLocation, setLocation] = useState({
    city: "City",
    state: "State"
  });

  const [newLocation, setNewLocation] = useState({
    newCity: "",
    newState: ""
  });

  const [dayNight, setDayNight] = useState("");
  const [submission, setSubmission] = useState();

  //TODO
  //SETUP ARRAY OF BACKGROUNDS RNG CHANGE

  return (
    <div className="app">
      <div className={dayNight == "no" ? "bg-img bgnight" : "bg-img"}></div>
      <div className="page-wrapper">
        <Weather
          currentCity={currentLocation.city}
          currentState={currentLocation.state}
          updateLocation={setLocation}
          newCity={newLocation.newCity}
          newState={newLocation.newState}
          isSubmitted={submission}
          setSubmission={setSubmission}
          dayNight={dayNight}
          setDayNight={setDayNight}
        />
        <Search
          currentLocation={currentLocation}
          currentCity={currentLocation.city}
          currentState={currentLocation.state}
          updateLocation={setLocation}
          setNewLocation={setNewLocation}
          newLocation={newLocation}
          newCity={newLocation.newCity}
          newState={newLocation.newState}
          isSubmitted={submission}
          setSubmission={setSubmission}
        />
      </div>
    </div>
  );
}
