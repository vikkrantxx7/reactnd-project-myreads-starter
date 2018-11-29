import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
//Home component
class BookHome extends Component {

    render() {
        const { getAllBooks,updateShelf } = this.props
        const currentlyReading = getAllBooks.filter(book => {
            return book.shelf === 'currentlyReading'
            })
        const wantToRead = getAllBooks.filter(book => {
            return book.shelf === 'wantToRead'
            })
        const read = getAllBooks.filter(book => {
            return book.shelf === 'read'
            })
    	return (
        	<div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                <BookShelf title="Currently Reading" books={ currentlyReading } updateShelf={ updateShelf }/>
                <BookShelf title="Want To Read" books={ wantToRead } updateShelf={ updateShelf }/>
                <BookShelf title="Read" books={ read } updateShelf={ updateShelf }/>
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