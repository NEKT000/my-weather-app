// import { useState, useEffect } from 'react';

export const Wether = ({ state }) => {
  return (
    <div className="wether-now">
      <div>
        <p className="city-name">{state?.city}</p>
        <p className="pop">Chance of rain: {state?.pop * 100}%</p>
        <p className="main-temp">{state?.tempNow.toFixed(0)}°</p>
      </div>
      <div className="img-div"><img src={`https://openweathermap.org/img/wn/${state?.hourlyList[0].weather[0].icon}@4x.png`} alt="" /></div>
    </div>
  );
};
