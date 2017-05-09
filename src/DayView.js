import React from 'react'
import PropTypes from 'prop-types'
import helpers from './utils/helpers'

function DayView (props) {
  const date = helpers.getDateFromTimestamp(props.dt)
  return (
    <span className='day-view'>
      <img
        src={process.env.PUBLIC_URL + '/weather-icons/' + props.weather.icon + '.svg'}
        alt={props.weather.description}
      />
      <span>{date}</span>
    </span>
  )
}

DayView.propTypes = {
  dt: PropTypes.number.isRequired,
  weather: PropTypes.shape({
    icon: PropTypes.text,
    description: PropTypes.text
  })
}

export default DayView
