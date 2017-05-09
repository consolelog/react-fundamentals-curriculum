import React, { Component } from 'react'
import classNames from 'classnames'

class SearchForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      city: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange (event) {
    let value = event.target.value
    this.setState(() => {
      return {
        city: value
      }
    })
  }

  handleSearch (event) {
    event.preventDefault()
    this.props.history.push({
      pathname: '/forecast',
      search: '?city=' + this.state.city
    })
  }

  render () {
    return (
      <div>
        <form
          className={classNames(
            'Search-form',
            this.props.className
          )}
          onSubmit={this.handleSearch}
        >
          <label
            htmlFor='city-input'
            className='sr-only'
          >Enter a City and State</label>
          <input
            type='text'
            id='city-input'
            className=''
            placeholder='e.g. St.George, Utah'
            onChange={this.handleChange}
          />
          <button
            type='submit'
            className='btn-submit'
          >Get Weather</button>
        </form>
      </div>
    )
  }
}

export default SearchForm
