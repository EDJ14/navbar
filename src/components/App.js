import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import '../scss/_main.scss';
import NavBar from './NavBar';
import Page1 from './Page1';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/p1" component={Page1} />
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
