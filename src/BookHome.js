import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import * as BookAPI from './BooksAPI'
//Home component
class BookHome extends Component {
    state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: []
    }

    //updates book's shelf property on the server
	updateShelf = (book, shelf) => {
        BookAPI.update(book, shelf).then(() => {
        this.updateState()
        })
    }

    //updates the state variables to re-render the component with updates
	updateState() {
    	BookAPI.getAll().then(books => {
        	this.setState({
            	books,
            	currentlyReading: books.filter(book => {
            	    return book.shelf === 'currentlyReading'
            	    }),
            	wantToRead: books.filter(book => {
                	return book.shelf === 'wantToRead'
                }),
                read: books.filter(book => {
                    return book.shelf === 'read'
                })
            })
        }).catch((e) => {
        	console.error(e)
        })
    }

    //updates the state on mount
    componentDidMount() {
        this.updateState()
    }

    render() {
    	return (
        	<div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                <BookShelf title="Currently Reading" books={ this.state.currentlyReading } updateShelf={ this.updateShelf }/>
                <BookShelf title="Want To Read" books={ this.state.wantToRead } updateShelf={ this.updateShelf }/>
                <BookShelf title="Read" books={ this.state.read } updateShelf={ this.updateShelf }/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
            </div>
        )
    }
}

export default BookHome