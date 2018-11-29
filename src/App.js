import React from 'react'
import BookSearch from './BookSearch'
import BookHome from './BookHome'
import Not404Found from './Not404Found'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import * as BookAPI from './BooksAPI'

//Main component
class BooksApp extends React.Component {
	state = {
		getAllBooks: [],
		query: '',
		books: []
	}

	//get all the books in shelf on render
	componentDidMount() {
		BookAPI.getAll().then(books => {
			this.setState({
				getAllBooks: books
			})
		}).catch((e) => {
			console.error(e)
		})
	}

	//update the component state after the update in server
	updateState = () => {
		BookAPI.getAll().then(books => {
			this.setState({
				getAllBooks: books
			})
		}).catch((e) => {
			console.error(e)
		})
	}

	//updates book's shelf property on the server
	updateShelf = (book, shelf) => {
		BookAPI.update(book, shelf).then(() => {
		this.updateState()
		})
	}

	//search books based on query supplied to the input
	searchBook = (e) => {
		var query = e.target.value.trim()
		this.setState({
				query
		})
		if(query !== "") {
				BookAPI.search(query).then(books => {
								this.setState({
										books: books.map(book => {
												this.state.getAllBooks.every(getBook => {
														if (getBook.id === book.id) {
																book.shelf = getBook.shelf;
																return false
														}
														book.shelf = "none"
														return true
												})
												return book
										})
								})
				}).catch(() => {
						this.setState({
								books: []
						})
						console.error('No Books returned for the supplied query')
				})
		} else {
			this.setState({
					books: []
			})
				console.error('Please enter a valid query')
		}
}

  render() {
    return (
      <div className="app">
				<Switch>
					<Route exact path="/" render={() => <BookHome getAllBooks={this.state.getAllBooks} updateShelf={this.updateShelf}/>}/>
					<Route exact path="/search" render={() => <BookSearch getAllBooks={this.state.getAllBooks} updateShelf={this.updateShelf} searchBook={ this.searchBook } query={ this.state.query } books={ this.state.books }/>}/>
					<Route component={Not404Found}/>
				</Switch>
			</div>
		)
	}
}

export default BooksApp
