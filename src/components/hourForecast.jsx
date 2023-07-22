import { useEffect, useState } from "react";

export const HourForecast = (props) => {
  const { time, temp, icon } = props;
  const [refTime, setRefTime] = useState(undefined);

  useEffect(() => {
    refactorTime(time);
  }, [time]);

  const refactorTime = (timeStr) => {
    let reafactoredTime = timeStr.split(" ")[1];
    //00:00:00
    reafactoredTime = reafactoredTime.split(":");
    //[00, 00, 00]
    reafactoredTime = `${reafactoredTime[0]}:${reafactoredTime[1]}`;
    setRefTime(reafactoredTime);
  };

  return (
    <div className="hourly-block">
      <p className="time-hour">{refTime}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p className="temp-hour">{temp.toFixed(0)}°C</p>
    </div>
  );
};
