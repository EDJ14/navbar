import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Define our button
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  margin-top: 50rem;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// Define what main theme will look like
const theme = {
  main: 'mediumseagreen'
};

class StyledPractice extends Component {
  render() {
    return (
      <div>
        <Button theme={{ main: 'royalblue' }}>Ad hoc theme</Button>
        <ThemeProvider theme={theme}>
          <div>
            <Button>Themed</Button>
            <Button theme={{ main: 'darkorange' }}>Overidden</Button>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default StyledPractice;
