import React, { Component } from 'react'
//Book component to be used in BookShelf and BookSearch
class Book extends Component {
    state = {
    	value: ""
    }

    //change the state to the value of the select option to keep the value selected after selection
	changeValue = (e) => {
    	this.setState({
        	value: e.target.value
        })
    }

    //changes state, updates shelf property on server
	callOnChange = (e) => {
	    this.changeValue(e)
	    this.props.updateShelf(this.props.book, e.target.value)
    }
    
	render() {
        const { book } = this.props
    	return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : "none"}}>{ typeof book.imageLinks === 'undefined' && (<span>No Cover</span>)}</div>
                    <div className="book-shelf-changer">
                        <select onChange={ this.callOnChange } value={ this.state.value === "" ? book.shelf : this.state.value }>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors ? book.authors.join('; ') : "No Author" }</div>
            </div>
		</li> 
        )
    }
}

export default Book