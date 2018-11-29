import React, { Component } from 'react'
import Book from './Book'
//Bookshelf component to be used in Home component
class BookShelf extends Component {
	render() {
        const { books,title,updateShelf } = this.props
    	return (
        	<div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    { books.map(book => (<Book key={ book.id } book={ book } updateShelf={ updateShelf }/>)) }
                </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf