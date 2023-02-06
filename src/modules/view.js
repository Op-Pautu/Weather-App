const view = (() => {
  function setSearchResult(weatherData) {
    if (!weatherData) return;

    const searchResult = document.getElementById('weather-info');
    searchResult.classList.add('active');

    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');

    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const description = document.getElementById('description');

    cityName.textContent = `${weatherData.cityName}`;
    temperature.textContent = `${weatherData.temperature}°C`;

    humidity.textContent = `Humidity: ${weatherData.humidity}%`;
    wind.textContent = `Wind: ${weatherData.windSpeed}km/h`;
    description.textContent = `${weatherData.description
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')}`;
  }

  return { setSearchResult };
})();

export default view;
