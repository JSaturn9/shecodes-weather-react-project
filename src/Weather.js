import React from "react";
import "./Weather.css";


export default function Weather() {
  let weatherData = {
    city: "Montpelier",
    temperature: 39,
    date: "Friday 18:00",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 55,
    wind: 2
  };
  return (
    <div className="card">
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city..."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/" className="active">
                    °F
                  </a>
                  |<a href="/">°C</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}mph</li>
            </ul>
          </div>
        </div>
        <div className="row weather-forecast">
            <div className="col-2">
                <ul>
                    <li>
                        Fri
                    </li>
                    <li>
                        Icon
                    </li>
                    <li>
                        40°F
                    </li>
                </ul>
            </div>
            <div className="col-2">
                <ul>
                    <li>
                        Sat
                    </li>
                    <li>
                        Icon
                    </li>
                    <li>
                        43°F
                    </li>
                </ul>
            </div>
            <div className="col-2">
                <ul>
                    <li>
                        Sun
                    </li>
                    <li>
                        Icon
                    </li>
                    <li>
                        50°F
                    </li>
                </ul>
            </div>
            <div className="col-2">
                <ul>
                    <li>
                        Mon
                    </li>
                    <li>
                        Icon
                    </li>
                    <li>
                        35°F
                    </li>
                </ul>
            </div>
            <div className="col-2">
                <ul>
                    <li>
                        Tue
                    </li>
                    <li>
                        Icon
                    </li>
                    <li>
                        33°F
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
