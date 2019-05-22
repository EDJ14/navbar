import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ScrollProgress from './ScrollProgress';

class NavBarTWO extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return <a>NULL</a>;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">Payments</li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits:
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div style={{ gridArea: 'head' }}>
        <header>
          <Link to="/navstyle">
            <h1 className="logo">Logo</h1>
          </Link>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <Link to="/nyredux">NY Redux</Link>
              </li>
              <li>
                <Link to="/content">Content</Link>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span />
          </label>
        </header>
        <ScrollProgress />
        <div style={{ margin: '10rem' }}>{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBarTWO);
