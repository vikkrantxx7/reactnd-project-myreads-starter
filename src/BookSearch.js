import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import {DebounceInput} from 'react-debounce-input'
//Search component
class BookSearch extends Component {

	render() {
	    const { query,books,searchBook,updateShelf } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput debounceTimeout={500} placeholder="Search by title or author" value={ query } onChange={ searchBook }/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { books.map(book => <Book key={ book.id } book={ book } updateShelf={ updateShelf }/>) }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch