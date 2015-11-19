var kelvinToC = function (kelvin) {
  return Math.round(kelvin - 273.15) + ' °C';
};

module.exports = function (lat, lon) {
  var API_KEY = '49c768eeb75bdf0732d56daa2f7c24b9',
      API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
  console.log('Fetching API:URL', API_URL);
  
  return fetch(API_URL)
    .then(response => {
      console.log('API response', response);
      return response.json();
    })
    .catch(ex => {
      console.log('Something went wrong fetching', ex)
      return null;
    })
    .then(json => {
      console.log('API json', json);
      return {
        city: json.name,
        temp: kelvinToC(json.main.temp),
        desc: json.weather[0].description
      };
    })
    .catch(ex => {
      console.log('Something went wrong parsing', ex)
      return null;
    });
}
