import React from 'react';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';
import './App.css'

function BooksApp() {
  return (
    <div className="app">
      <Route
        exact path="/"
        component={ListBooks}
      />
      <Route
        path="/search"
        component={SearchBooks}
      />
    </div>
  )
}
 export default BooksApp
