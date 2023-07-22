export const DailyForecast = (props) => {
  const { dayOfTheWeek, minTemp, maxTemp, description } = props;

  return (
    <div className="daily-forecast">
      <p>{dayOfTheWeek}</p>
      <p>{description}</p>
      <p><span className="top-temp">{maxTemp.toFixed(0)}</span>/{minTemp.toFixed(0)}°C</p>
    </div>
  );
};
