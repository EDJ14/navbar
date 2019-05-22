import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import * as actions from '../actions';

import { IconContext } from 'react-icons';
import {
  MdThumbDown,
  MdThumbUp,
  MdStarBorder,
  MdHourglassEmpty
} from 'react-icons/md';

import Spinner from './Spinner';

const SaveButCont = styled.div`
  grid-area: save;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 1rem;
`;

const StarBd = styled.div`
  grid-area: save;
  margin-left: 3rem;
  cursor: pointer;
`;

const Liked = styled.div`
  grid-area: like;
  margin-left: 35%;
  cursor: pointer;

  &:last-of-type {
    margin-left: 3rem;
  }
`;

class SaveButton extends Component {
  state = {
    isLoading: 'INIT',
    count: 0,
    color: 'black',
    likes: 0,
    dislikes: 0
  };

  handleClick = async values => {
    this.setState({
      isLoading: 'LOAD',
      count: this.state.count + 1,
      color: this.state.color == 'gold' ? 'black' : 'gold'
    });

    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    await timeout(2000);

    //await axios.post('/api/user', values);
    const clr = this.state.count % 2 == 0 ? 'INIT' : 'END';

    this.setState({
      isLoading: clr
    });
  };

  handleLikeClick = async () => {
    this.setState({ likes: this.state.likes + 1 });
    const res = await axios.post('/api/articles', { likes: 5 });
    console.log(res);
  };

  handleDisLikeClick = () => {
    this.setState({ dislikes: this.state.dislikes + 1 });
  };

  renderStar() {
    if (this.state.isLoading == 'LOAD') {
      return (
        <div>
          <div className="loader2">Loading...</div>
        </div>
      );
    }
    return (
      <IconContext.Provider value={{ color: this.state.color, size: '2rem' }}>
        <MdStarBorder />
      </IconContext.Provider>
    );
  }

  /*  <IconContext.Provider value={{ size: '1.5rem' }}>
          <div style={{ marginLeft: '.2rem' }}>
            <MdHourglassEmpty />
          </div>
        </IconContext.Provider> */

  /*  */

  render() {
    return (
      <SaveButCont>
        <StarBd
          onClick={() => this.handleClick({ headline: this.props.headline })}
        >
          {this.renderStar()}
        </StarBd>
        <Liked>
          <div style={{ display: 'flex' }}>
            <IconContext.Provider value={{ color: 'green', size: '1.5rem' }}>
              <MdThumbUp onClick={this.handleLikeClick} />
            </IconContext.Provider>
            <span style={{ color: 'green', marginLeft: '.5rem' }}>
              {this.state.likes}
            </span>
          </div>
        </Liked>
        <Liked>
          <div style={{ display: 'flex' }}>
            <span style={{ color: 'red', marginRight: '.5rem' }}>
              {this.state.dislikes}
            </span>
            <IconContext.Provider value={{ color: 'red', size: '1.5rem' }}>
              <MdThumbDown onClick={this.handleDisLikeClick} />
            </IconContext.Provider>
          </div>
        </Liked>
      </SaveButCont>
    );
  }
}

export default connect(
  null,
  actions
)(SaveButton);
