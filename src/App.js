import React from 'react'
import BookSearch from './BookSearch'
import BookHome from './BookHome'
import { Route } from 'react-router-dom'
import './App.css'

//Main component
class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
      	<Route exact path="/" render={() => <BookHome />}/>
				<Route exact path="/search" render={() => <BookSearch />}/>
			</div>
		)
	}
}

export default BooksApp
