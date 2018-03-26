import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  setupBooks() {
    const books = this.props.books.map((b) => {
      return (
        <li key={ b.id } >
        <Book
          book={ b }
          shelfchange={ this.props.shelfchange }
        />
      </li>
      )
    });
    return books;
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.setupBooks() }
          </ol>
        </div>
      </div>
    )
  }
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelfchange: PropTypes.func.isRequired
};

export default Bookshelf;