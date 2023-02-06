import weather from './modules/weather';
import view from './modules/view';

const searchInput = document.getElementById('search-city');
const searchBtn = document.getElementById('search-button');
const clearButton = document.getElementById('reset');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

searchBtn.addEventListener('click', async () => {
  if (searchInput.value === '') return;
  const weatherData = await weather.getData(searchInput.value);
  view.setSearchResult(weatherData);
});
clearButton.addEventListener('click', () => {
  searchInput.value = '';
});
