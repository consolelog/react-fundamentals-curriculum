import axios from 'axios'

const API_KEY = '756d85a5f4f2e296c04d71520df69485'
const BASE_URL = ' http://api.openweathermap.org/data/2.5/'
const DefaultParams = {
  type: 'accurate',
  APPID: API_KEY
}

function handleError (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.warn(error.response.data)
    console.warn(error.response.status)
    console.warn(error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.warn(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.warn('Error', error.message)
  }
  console.warn(error.config)
}

function getCurrentWeather (city) {
  let params = Object.assign({}, DefaultParams, {q: city})
  return axios.get(BASE_URL + 'weather', {
    params: params
  })
  .then((res) => {
    return res.data
  })
  .catch(handleError)
}

function getFiveDayForecast (city) {
  let params = Object.assign({}, DefaultParams, {q: city, cnt: 5})
  return axios.get(BASE_URL + 'forecast/daily', {
    params: params
  })
  .then((res) => {
    return res.data
  })
  .catch(handleError)
}

const api = {
  getCurrentWeather: function (city) {
    return getCurrentWeather(city)
  },

  getFiveDayForecast: function (city) {
    return getFiveDayForecast(city)
  }
}

export default api
