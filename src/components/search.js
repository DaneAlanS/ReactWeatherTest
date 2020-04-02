import React, { useState, useEffect } from "react";

function Search(props) {
  return (
    <div>
      <form className="search-form">
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
      </form>
    </div>
  );
}

export default Search;
