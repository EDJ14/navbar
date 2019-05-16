import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../scss/_main.scss';
import Page1 from './Page1';
import StyledPractice from './StyledPractice';
import StyledNav from './StyledNav';
import StripeBar from './StripeBar';
import NavBarTWO from './NavBarTWO';
import NYTest from './NYTest';
import NYTSearch from './NYTSearch';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser().catch(() => console.log('no get user sry!!!!'));
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/navtwo" component={NavBarTWO} />
        <Route exact path="/normalnav" component={StripeBar} />
        <Route exact path="/p1" component={Page1} />
        <Route exact path="/styled" component={StyledPractice} />
        <Route exact path="/navstyle" component={StyledNav} />
        <Route exact path="/nyt" component={NYTest} />
        <Route exact path="/search" component={NYTSearch} />
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(hot(module)(App));
