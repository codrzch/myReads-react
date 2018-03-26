import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  state = {
    image: undefined,
  };

  componentWillMount() {
    let thumbnail;
    if (this.props.book && this.props.book.imageLinks.thumbnail)
      thumbnail = this.props.book.imageLinks.thumbnail;
    else
      thumbnail = "https://books.google.ca/googlebooks/images/no_cover_thumb.gif";
    const image = {
      backgroundImage: `url(${ thumbnail })`
    };
    this.setState({ image });
  }

  render() {
    const { book } = this.props;
    const { shelf, title, authors } = book;

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ this.state.image }></div>
          <div className="book-shelf-changer">
            <select value={ shelf }
                    onChange={ (e) => this.props.shelfchange(book, e.target.value)}>
              <option value="none">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none"> None </option>
            </select>
          </div>
        </div>
        <div className="book-title">{ title }</div>
        <div className="book-authors">{ authors ? authors.join(`,\n`) : ``}</div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelfchange: PropTypes.func
};

export default Book;