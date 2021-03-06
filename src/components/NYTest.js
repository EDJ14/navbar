import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import ScrollProgress from './ScrollProgress';

const Contr = styled.div`
  margin: 3rem;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    'head head head head'
    'main main main main'
    'main main main main'
    'auth date .    .   ';
  width: 35vw;
  height: 30vh;
  border: 1px solid grey;
  box-shadow: 0 0 5px;
`;

/* const Gridr = styled.div`
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
`; */

const Headline = styled.div`
  grid-area: head;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Articlesec = styled.div`
  grid-area: main;
  background-color: rgb(237, 239, 242);
  display: flex;
  justify-content: start;
  align-items: center;

  ul li:last-of-type {
    margin-top: 10px;
  }
`;
const Authr = styled.div`
  grid-area: auth;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dat = styled.div`
  grid-area: date;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class NYTest extends Component {
  state = { articles: [], inProp: false, setInProp: false };

  handleClickNews = async () => {
    let art = this.state.articles;
    this.setState({ inProp: true });

    const keyurl =
      'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=iOY5EuklpHJcrAeNGlvPKAt0yf8EktdN';

    const res = await axios.get(keyurl);
    // res.data.response.docs.map(doc => console.log(doc.abstract));
    console.log(res);

    art.push(res.data.response.docs);

    this.setState({ articles: art });
  };

  renderContent() {
    if (this.state.articles.length == 0) {
      return;
    }

    console.log(this.state);

    const sty = {};
    sty['margin'] = '4rem';
    sty['backgroundColor'] = 'rgba(240, 201, 193, 1)';
    sty['fontSize'] = '2rem';
    sty['display'] = 'inline';

    return this.state.articles.map(instance =>
      instance.map(({ abstract, pub_date, headline, web_url }) => {
        let abs2 = abstract
          .split(' ')
          .map(word =>
            word == 'Trump' || word == 'Trump’s' ? 'PRESIDENT TRUMP' : word
          )
          .join(' ');

        return (
          <div style={{ display: 'inline-block' }}>
            <Contr>
              <Headline>
                <a href={web_url}>{headline.main}</a>
              </Headline>
              <Articlesec>{abs2}</Articlesec>
              <Authr>BITCH</Authr>
              <Dat>{pub_date}</Dat>
            </Contr>
          </div>
          /*<div key={abstract} style={sty}>
            {abs2}
          </div> */
        );
      })
    );
  }

  render() {
    const style = { position: 'fixed' };
    const inputStyle = { margin: '4rem' };
    return (
      <div>
        <div>
          <button style={style} onClick={this.handleClickNews}>
            PRESS FOR NOOS
          </button>
        </div>
        <div>{this.renderContent()}</div>
        <ScrollProgress />
      </div>
    );
  }
}

export default NYTest;
