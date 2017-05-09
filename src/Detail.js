import React from 'react'
import DayView from './DayView'

function converTemp (temp) {
  return parseInt(temp - 273.15, 10) + '℃'
}

function Detail (props) {
  const report = props.location.state.report
  const city = props.location.state.city
  return (
    <div>
      <DayView
        dt={report.dt}
        weather={report.weather[0]}
      />
      <h2>{city}</h2>
      <ul>
        <li>{report.weather[0].description}</li>
        <li>min temp: {converTemp(report.temp.min)}</li>
        <li>max temp: {converTemp(report.temp.max)}</li>
        <li>humidity: {report.humidity}</li>
      </ul>
    </div>
  )
}

export default Detail
