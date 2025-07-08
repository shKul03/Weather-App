import React, { useState, useEffect } from "react";
import "./App.css";
import { getWeather } from "./api.ts";

function App() {
  const [weatherData, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [aqi, setAqi] = useState(false);
  const [dataExists, setDataExists] = useState(false);

  async function getWeatherClickHandler(city, aqi) {
    const data = await(getWeather(city, aqi));
    setWeather(data);
    setDataExists(true);
  }

  return (
    <div className="App">
      <div>
        <h1>Weather Now</h1>
      </div>
      <div className="outerdivtype">
        <div className="divtype">
          <label>City</label>
        </div>
        <div className="divtype">
          <select
            id="cities"
            name="cities"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="paris">Paris</option>
            <option value="pune">Pune</option>
          </select>
        </div>
        <div className="divtype">
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
      {dataExists && (
        <div>
          <p>City: {weatherData.location.name}</p>
          <p>Country: {weatherData.location.country}</p>
          <p>Temperature: {weatherData.current.temp_c}</p>
          <p>Humidity: {weatherData.current.humidity}</p>
          <p>wind_kph: {weatherData.current.wind_kph}</p>
          <p>Cloud cover: {weatherData.current.condition.text}</p>
          {weatherData?.current?.air_quality && (
            <div>
              <p>"pm2_5": {weatherData.current.air_quality.pm2_5}</p>
              <p>"pm10": {weatherData.current.air_quality.pm10}</p>
              <p>"co": {weatherData.current.air_quality.co}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
