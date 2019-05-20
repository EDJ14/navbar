import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import * as actions from '../actions';

import { IconContext } from 'react-icons';
import { MdThumbDown, MdThumbUp, MdStarBorder } from 'react-icons/md';

const SaveBut = styled.div`
  grid-area: save;
  justify-self: end;
  align-self: end;
  margin-right: 2rem;
  margin-bottom: 2rem;
  height: 1rem;
  width: 1rem;
  background-color: ${props => {
    switch (props.backgrnd) {
      case 'INIT':
        return 'black';
      case 'LOAD':
        return 'green';
      case 'END':
        return 'blue';
    }
  }}
  z-index: 100;
  cursor: pointer;
`;

const SaveButCont = styled.div`
  grid-area: save;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const StarBd = styled.div`
  grid-area: save;
`;

const Liked = styled.div`
  grid-area: like;
  margin-left: auto;
`;

class SaveButton extends Component {
  state = { isLoading: 'INIT', count: 0, color: 'black' };

  handleClick = async values => {
    const cnt = this.state.count + 1;
    this.setState({
      isLoading: 'LOAD',
      count: cnt,
      color: this.state.color == 'gold' ? 'black' : 'gold'
    });

    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function sleep() {
      await timeout(3000);
      return;
    }

    await sleep();

    //await axios.post('/api/user', values);
    const clr = this.state.count % 2 == 0 ? 'INIT' : 'END';

    this.setState({
      isLoading: clr
    });
  };

  render() {
    return (
      <SaveButCont>
        <StarBd
          onClick={() => this.handleClick({ headline: this.props.headline })}
        >
          <IconContext.Provider
            value={{ color: this.state.color, size: '2rem' }}
          >
            <div>
              <MdStarBorder />
            </div>
          </IconContext.Provider>
        </StarBd>
        <Liked>
          <MdThumbUp />
        </Liked>
        <Liked>
          <MdThumbDown />
        </Liked>
      </SaveButCont>
    );
  }
}

export default connect(
  null,
  actions
)(SaveButton);

/*<SaveBut
        backgrnd={this.state.isLoading}
        onClick={() => this.handleClick({ headline: this.props.headline })}
      />*/
