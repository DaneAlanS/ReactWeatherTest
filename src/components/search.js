import React, { useState, useEffect } from "react";

function Search(props) {
  function handleSubmit(event) {
    console.log("SUBMISSION");
    props.setSubmission(true);
    event.preventDefault();
    props.setNewLocation({
      ...props.newLocation,
      newCity: props.currentCity,
      newState: props.currentState
    });
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-wrapper">
          <input
            className="city-search"
            name="city"
            type="text"
            placeholder="City...."
            value={props.currentCity}
            onChange={e =>
              props.updateLocation({
                ...props.currentLocation,
                city: e.target.value
              })
            }
          ></input>
        </div>

        <div className="search-wrapper">
          <input
            className="state-search"
            name="state"
            type="text"
            placeholder="State...."
            value={props.currentState}
            onChange={e =>
              props.updateLocation({
                ...props.currentLocation,
                state: e.target.value
              })
            }
          ></input>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Search;
