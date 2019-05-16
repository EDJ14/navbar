import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  font-size: 1rem;
  margin: 1rem;
  margin-top: 1rem;
  padding: 0.25em 1em;
  border-radius: 3px;

  &::before {
    content: '';
    width: 0;

    &:after {
      width: 100%;
    }
  }

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const Header = styled.header`
  background: $color-primary;
  text-align: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 10vh;
  display: flex;
`;

const theme = {
  main: 'mediumseagreen'
};

class StyledNav extends Component {
  render() {
    return (
      <Header>
        <Button theme={{ main: 'royalblue' }}>Ad hoc theme</Button>
        <ThemeProvider theme={theme}>
          <div>
            <Link to="/normalnav">
              <Button>Themed</Button>
            </Link>
            <Button theme={{ main: 'darkorange' }}>Overidden</Button>
          </div>
        </ThemeProvider>
      </Header>
    );
  }
}

export default StyledNav;
