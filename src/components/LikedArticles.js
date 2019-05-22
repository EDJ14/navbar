import React, { Component } from 'react';
import axios from 'axios';

class LikedArticles extends Component {
  state = { articles: '' };

  async componentDidMount() {
    const res = await axios.get('/api/likedarticles/420');
    this.setState({ articles: res.data });
  }

  render() {
    return <div>{this.state.articles}</div>;
  }
}

export default LikedArticles;
