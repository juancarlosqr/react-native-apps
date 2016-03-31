/*global fetch*/

import config from '../config'

const BASE_URL = 'http://api.openweathermap.org/data/2.5/'

export default {
  kelvinToC (kelvin) {
    return Math.round(kelvin - 273.15) + ' °C'
  },
  getWeather (lat, lon) {
    return fetch(`${ BASE_URL }weather?lat=${ lat }&lon=${ lon }&APPID=${ config.API_KEY }`)
      .then(status)
      .then(response => response.json())
  }
}

const status = (response) => {
  if (response.ok) {
    return response
  } else {
    return response.json()
      .then((res) => {
        let error = new Error(res.statusText || res.message || res.error)
        error.response = res
        throw error
      })
  }
}
