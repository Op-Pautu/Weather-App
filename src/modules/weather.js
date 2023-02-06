const weather = (() => {
  function convertData(data) {
    const cityName = data.name + ', ' + data.sys.country;
    const temperature = data.main.temp;

    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const description = data.weather[0].description;
    return {
      cityName,
      temperature,

      humidity,
      windSpeed,
      description,
    };
  }

  async function getData(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=26b314d130fe06664667d422cb7e22de`;
    try {
      const response = await fetch(endpoint, { mode: 'cors' });
      if (!response.ok) throw new Error(`City ${city} not found`);
      const data = convertData(await response.json());
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  return { getData };
})();

export default weather;
