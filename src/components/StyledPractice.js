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

/* const Outer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item1 = styled.div`
  background-color: var(--blue);
`;
const Item2 = styled.div`
  background-color: blue;
`;
const Item3 = styled.div`
  background-color: green;
`;
const Item4 = styled.div`
  background-color: yellow;
`; */

const Contr = styled.div`
  width: 50rem;
  margin: 2rem;
  padding: 2rem;
`;

const Gridr = styled.div`
  display: grid;
  grid-gap: 1px;
  justify-items: stretch;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  grid-template-areas:
    '. head head .'
    'main main main main'
    'main main main main'
    'auth . . dat';
`;

const Headline = styled.div`
  grid-area: head;
  background-color: orange;
  justify-content: center;
`;
const Articlesec = styled.div`
  grid-area: main;
  background-color: blue;
`;
const Authr = styled.div`
  grid-area: auth;
  background-color: green;
`;
const Dat = styled.div`
  grid-area: dat;
  background-color: yellow;
`;

class StyledPractice extends Component {
  render() {
    return (
      <div>
        <Contr>
          <Gridr>
            <Headline>BITCH</Headline>
            <Articlesec>BITCH</Articlesec>
            <Authr>BITCH</Authr>
            <Dat>BITCH</Dat>
          </Gridr>
        </Contr>
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
