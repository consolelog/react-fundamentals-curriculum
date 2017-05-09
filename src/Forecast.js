import React, { Component } from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import api from './utils/api'
import DayView from './DayView'

function CityName (props) {
  return (
    <div>
      <h2>{props.city.name}</h2>
      <h3>{props.city.country}</h3>
    </div>
  )
}

CityName.propTypes = {
  city: PropTypes.shape({
    country: PropTypes.text,
    name: PropTypes.text
  })
}

function ListView (props) {
  return (
    <ul className='weather-list'>
      {props.list.map((dayReport) => {
        return (
          <li key={dayReport.dt}>
            <Link to={{
              pathname: 'details/' + props.city,
              state: {
                city: props.city,
                report: dayReport
              }
            }}>
              <DayView
                dt={dayReport.dt}
                weather={dayReport.weather[0]}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

ListView.propTypes = {
  list: PropTypes.array.isRequired
}

class Forecast extends Component {
  constructor (props) {
    super(props)

    this.state = {
      report: null,
      loading: true,
      error: null
    }
  }

  searchWhenMount () {
    let city = queryString.parse(this.props.location.search)
    api.getFiveDayForecast(city)
      .then((report) => {
        this.setState(() => {
          return {
            report: report,
            loading: false,
            error: null
          }
        })
      })
  }

  componentDidMount () {
    this.searchWhenMount()
  }

  // Make sure search is invoked when props update. In this case, when the history is pushed with a new search query param.
  componentWillReceiveProps () {
    this.searchWhenMount()
  }

  render () {
    const { loading, report, error } = this.state

    if (loading) {
      return (
        <div>Loading...</div>
      )
    }

    if (error) {
      return (
        <div>{error}</div>
      )
    }

    return (
      <div>
        <CityName city={report.city} />
        <ListView list={report.list} city={report.city.name} />
      </div>
    )
  }
}

export default Forecast
