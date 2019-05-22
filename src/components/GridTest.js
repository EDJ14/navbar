import React, { Component } from 'react';
import styled from 'styled-components';

const Alpha = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 10vh 70vh 20vh;
  grid-template-areas:
    'head head head head head'
    'cont cont cont cont cont'
    'foot foot foot foot foot';
`;

const Gheader = styled.div`
  grid-area: head;
  background-color: pink;
  padding: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeHeader = styled.button`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;

    //Change for the <button> element
    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#000, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
  }
`;

const Gbody = styled.div`
  grid-area: cont;
  background-color: blue;
`;

const Gfooter = styled.div`
  grid-area: foot;
  background-color: green;
`;

class GridTest extends Component {
  render() {
    return (
      <Alpha>
        <Gheader>
          <HomeHeader>HOME</HomeHeader> <div>STUFF</div>
          <div>STUFF</div>
          <div>STUFF</div>
          <div>STUFF</div>
        </Gheader>
        <Gbody />
        <Gfooter />
      </Alpha>
    );
  }
}

export default GridTest;
