const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('reset');
const cityInput = document.getElementById('search-city');
let weatherInfo = document.getElementById('weather-info');

async function fetchWeatherData(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26b314d130fe06664667d422cb7e22de&units=metric`,
      { mode: 'cors' }
    );
    let data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

function processWeatherData(data) {
  let weather = {
    cityName: data.name,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    description: data.weather[0].description,
  };
  return weather;
}

searchButton.addEventListener('click', async () => {
  let city = cityInput.value;
  let weatherData = await fetchWeatherData(city);
  if (!weatherData) {
    weatherInfo.textContent =
      'An error occurred while fetching the weather data.';
    return;
  }
  let processedWeather = processWeatherData(weatherData);
  weatherInfo.textContent = `City: ${processedWeather.cityName}
  Temperature: ${processedWeather.temperature}°C
  Humidity: ${processedWeather.humidity}%
  Description: ${processedWeather.description}`;
});
