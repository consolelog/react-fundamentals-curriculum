import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import SearchForm from './SearchForm'
import Forecast from './Forecast'
import Detail from './Detail'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <div className='App-header'>
            <h1>Clever Title</h1>
            <Route render={props => <SearchForm className='Search-form--inline' {...props} />} />
          </div>
          <main className='App-main'>
            <Switch>
              <Route exact path='/' component={SearchForm} />
              <Route path='/forecast' component={Forecast} />
              <Route path='/details/:city' component={Detail} />
              <Route render={() => {
                return (
                  <p>Not Found!</p>
                )
              }} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
