const API_KEY = "83a4e2df329e0b1dea9e768963379a72";

export const gettingWeather = async (city) => {
  // Додайте блок try-catch Для запобігання проблем з ключами (сервер може відповідати далеко не завжди)
  const api_url = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await api_url.json();
  console.log(data, "DATA");
  return data;
};

export const gettingForecast = async (city) => {
  const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`;
  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': 'c1fe55bd09mshf0a865494fd2c88p181cfcjsnb727840a0753',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result, "!!!!");
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getIcon = async (iconID) => {
  const url = `https://openweathermap.org/img/wn/${iconID}@2x.png`;

  try {
    const response = await fetch(url);
    const result = await response;
    console.log(result, "iconfetch!!!!!");
    return result;
  } catch (error) {
    console.error(error);
  }
};
