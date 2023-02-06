/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n\n\n\nconst searchInput = document.getElementById('search-city');\nconst searchBtn = document.getElementById('search-button');\nconst clearButton = document.getElementById('reset');\nsearchForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n});\n\nsearchBtn.addEventListener('click', async () => {\n  if (searchInput.value === '') return;\n  const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(searchInput.value);\n  _modules_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setSearchResult(weatherData);\n});\nclearButton.addEventListener('click', () => {\n  searchInput.value = '';\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst view = (() => {\n  function setSearchResult(weatherData) {\n    if (!weatherData) return;\n\n    const searchResult = document.getElementById('weather-info');\n    searchResult.classList.add('active');\n\n    const cityName = document.getElementById('cityName');\n    const temperature = document.getElementById('temperature');\n\n    const humidity = document.getElementById('humidity');\n    const wind = document.getElementById('wind');\n    const description = document.getElementById('description');\n\n    cityName.textContent = `${weatherData.cityName}`;\n    temperature.textContent = `${weatherData.temperature}°C`;\n\n    humidity.textContent = `Humidity: ${weatherData.humidity}%`;\n    wind.textContent = `Wind: ${weatherData.windSpeed}km/h`;\n    description.textContent = `${weatherData.description\n      .split(' ')\n      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))\n      .join(' ')}`;\n  }\n\n  return { setSearchResult };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/view.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weather = (() => {\n  function convertData(data) {\n    const cityName = data.name + ', ' + data.sys.country;\n    const temperature = data.main.temp;\n\n    const humidity = data.main.humidity;\n    const windSpeed = data.wind.speed;\n    const description = data.weather[0].description;\n    return {\n      cityName,\n      temperature,\n\n      humidity,\n      windSpeed,\n      description,\n    };\n  }\n\n  async function getData(city) {\n    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=26b314d130fe06664667d422cb7e22de`;\n    try {\n      const response = await fetch(endpoint, { mode: 'cors' });\n      if (!response.ok) throw new Error(`City ${city} not found`);\n      const data = convertData(await response.json());\n      return data;\n    } catch (error) {\n      alert(error);\n      return null;\n    }\n  }\n  return { getData };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;