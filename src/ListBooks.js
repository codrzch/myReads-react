import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  state = {
    books: []
  };

  componentWillMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  changeShelves(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books });
      });
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading"
                       books={ this.state.books.filter(book => book.shelf === "currentlyReading") }
                       shelfchange={ this.changeShelves.bind(this) }
            />
            <Bookshelf title="Want to Read"
                       books={ this.state.books.filter(book => book.shelf === "wantToRead") }
                       shelfchange={ this.changeShelves.bind(this) }
            />
            <Bookshelf title="Read"
                       books={ this.state.books.filter(book => book.shelf === "read") }
                       shelfchange={ this.changeShelves.bind(this) }
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks