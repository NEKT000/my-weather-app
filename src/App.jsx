import "./App.css";
import { Form } from "./components/form";
import { Wether } from "./components/wether";
import { HourForecast } from "./components/hourForecast";
import { DailyForecast } from "./components/dailyForecast";

import { gettingWeather } from "./components/api";
import { gettingForecast } from "./components/api";
import { AirConditions } from "./components/airConditions";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faSmog,
  faList,
  faMap,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [state, setState] = useState(undefined);

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    document.title = "Weather App";
    getData();
  }, []);

  const getData = async (e) => {
    let city = "";
    if (e === undefined) {
      city = "Madrid";
    } else {
      e.preventDefault();
      city = e.target.elements.city.value;
    }

    let jsonForecast = await gettingForecast(city);
    let jsonData = await gettingWeather(city);

    console.log(jsonData);

    let dailyForecast = jsonForecast.forecasts.slice(0, 7);
    let hourlyList = jsonData.list.slice(0, 6);

    setState({
      city: jsonData.city.name,
      tempNow: jsonData.list[0].main.temp,
      pop: jsonData.list[0].pop,
      hourlyList: hourlyList,
      realFeel: jsonData.list[0].main.feels_like,
      windSpeed: jsonData.list[0].wind.speed,
      dailyForecast: dailyForecast,
    });
  };

  return (
    <div className="container">
      <div className="nav-bar">
        <div className="main-nav">
          <FontAwesomeIcon icon={faWind} className="faWind" />
        </div>
        <div className="nav weather-nav">
          <FontAwesomeIcon icon={faSmog} className="ico" />
          <p className="weather-p">Weather</p>
        </div>
        <div className="nav">
          <FontAwesomeIcon icon={faList} className="ico" />
          <p className="weather-p">Cities</p>
        </div>
        <div className="nav">
          <FontAwesomeIcon icon={faMap} className="ico" />
          <p className="weather-p">Map</p>
        </div>
        <div className="nav">
          <FontAwesomeIcon icon={faSliders} className="ico" />
          <p className="weather-p">Setings</p>
        </div>
      </div>
      <div className="main">
        <Form weatherMethod={getData} />
        <Wether state={state} />
        <div className="hourly-forecast">
          <h4 className="today-forecast-h">Today Forecast</h4>
          <div id="hourly-forecast">
            {state &&
              state.hourlyList.map((item, i) => (
                <HourForecast
                  key={i}
                  time={item.dt_txt}
                  temp={item.main.temp}
                  icon={item.weather[0].icon}
                />
              ))}
          </div>
        </div>
        <AirConditions state={state} />
        <div id="seven-day-forecast">
          <p className="seven-day">7-day forecast</p>
          {state &&
            state.dailyForecast.map((item, i) => (
              <DailyForecast
                key={i}
                dayOfTheWeek={item.day}
                minTemp={item.low}
                maxTemp={item.high}
                description={item.text}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
