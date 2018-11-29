import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BookAPI from './BooksAPI'
import Book from './Book'
import {DebounceInput} from 'react-debounce-input'
//Search component
class BookSearch extends Component {
    state = {
        query: '',
        books: [],
        getAllBooks: []
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
            console.error('Please enter a valid query')
        }
    }

    //updates the book's shelf property on server
	moveBook = (book, shelf) => {
	    BookAPI.update(book, shelf)
    }
    
    //get all the books from shelf
	componentDidMount() {
    	BookAPI.getAll().then(getAllBooks => {
        	this.setState({
            	getAllBooks
            })
        })
    }


	render() {
	    const { query } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput debounceTimeout={500} placeholder="Search by title or author" value={ query } onChange={ this.searchBook }/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { this.state.books.map(book => <Book key={ book.id } book={ book } updateShelf={ this.moveBook }/>) }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch