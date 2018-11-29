import React from 'react'
import BookSearch from './BookSearch'
import BookHome from './BookHome'
import Not404Found from './Not404Found'
import { Switch, Route } from 'react-router-dom'
import './App.css'

//Main component
class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
				<Switch>
					<Route exact path="/" render={() => <BookHome />}/>
					<Route exact path="/search" render={() => <BookSearch />}/>
					<Route component={Not404Found}/>
				</Switch>
			</div>
		)
	}
}

export default BooksApp
