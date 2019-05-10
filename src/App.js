import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
      </div>
    );
  }
}

export default hot(module)(App);
