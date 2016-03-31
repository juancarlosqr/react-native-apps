import config from '../config'
const API_BASE_URL = 'http://api.openweathermap.org/data/2.5/'
const kelvinToC = (kelvin) => Math.round(kelvin - 273.15) + ' °C'
export default {
  getWeather (lat, lon) {
    const API_URL = `${ API_BASE_URL }weather?lat=${ lat }&lon=${ lon }&APPID=${ config.API_KEY }`
    console.log('Fetching API:URL', API_URL)
    return fetch(API_URL)
      .then(response => {
        console.log('API response', response)
        return response.json()
      })
      .catch(ex => {
        console.log('Something went wrong fetching', ex)
        return null
      })
      .then(json => {
        console.log('API json', json)
        return {
          city: json.name,
          temp: kelvinToC(json.main.temp),
          desc: json.weather[0].description
        }
      })
      .catch(ex => {
        console.log('Something went wrong parsing', ex)
        return null
      })
  }
}
