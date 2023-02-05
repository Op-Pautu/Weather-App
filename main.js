/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const searchButton = document.getElementById('search-button');\nconst clearButton = document.getElementById('reset');\nconst cityInput = document.getElementById('search-city');\nlet weatherInfo = document.getElementById('weather-info');\n\nasync function fetchWeatherData(city) {\n  try {\n    let response = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26b314d130fe06664667d422cb7e22de&units=metric`,\n      { mode: 'cors' }\n    );\n    let data = await response.json();\n    return data;\n  } catch (err) {\n    console.error(err);\n    return null;\n  }\n}\n\nfunction processWeatherData(data) {\n  let weather = {\n    cityName: data.name,\n    temperature: data.main.temp,\n    humidity: data.main.humidity,\n    description: data.weather[0].description,\n  };\n  return weather;\n}\n\nsearchButton.addEventListener('click', async () => {\n  let city = cityInput.value;\n  let weatherData = await fetchWeatherData(city);\n  if (!weatherData) {\n    weatherInfo.textContent =\n      'An error occurred while fetching the weather data.';\n    return;\n  }\n  let processedWeather = processWeatherData(weatherData);\n  weatherInfo.textContent = `City: ${processedWeather.cityName}\n  Temperature: ${processedWeather.temperature}°C\n  Humidity: ${processedWeather.humidity}%\n  Description: ${processedWeather.description}`;\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;