import React, { useState, useEffect } from "react";
import "./App.css";
import { getWeather } from "./api.ts";

function App() {
  const [weatherData, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [aqi, setAqi] = useState(false);

  function getWeatherClickHandler(city, aqi) {
    setWeather(getWeather(city, aqi));
  }

  return (
    <div className="App">
      <div>
        <h1>Weather Now</h1>
      </div>
      <div class="outerdivtype">
        <div class="divtype">
          <label>City</label>
        </div>
        <div class="divtype">
          <select
            id="cities"
            name="cities"
            value={city}
            onChange={() => setCity({ city })}
          >
            <option value="paris">Paris</option>
            <option value="pune">Pune</option>
          </select>
        </div>
        <div class="divtype">
          <label>
            <input
              type="checkbox"
              id="aqi"
              onChange={(e) => setAqi(e.target.checked)}
            />
            Air Quality Data
          </label>
        </div>
        <div>
          <button onClick={() => getWeatherClickHandler(city, aqi)}>
            Get Weather
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
