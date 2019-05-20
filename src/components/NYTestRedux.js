import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';

import ScrollProgress from './ScrollProgress';
import SaveButton from './SaveButton';

const Contr = styled.div`
  background-image: linear-gradient(to bottom right, white, rgb(225, 230, 239));
  margin: 1.5rem 2.5rem;
  box-shadow: 0 0 10px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  grid-template-rows: 0.5fr min-content 0.5fr 0.75fr;
  grid-gap: 10px;
  grid-template-areas:
    'head head head head'
    'main main main main'
    'auth date .    .   '
    'save save save save';
  width: 35vw;
  height: min-content;
  border: 1px solid grey;
  position: relative;
`;

const Headline = styled.div`
  margin: 2rem 1.5rem 0 1.5rem;
  grid-area: head;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Articlesec = styled.div`
  grid-area: main;
  height: min-content;
  margin: 0 2rem 3rem 2rem;
  font-size: 1.05rem;
  display: flex;
  justify-content: start;
  align-items: center;

  ul li:last-of-type {
    margin-top: 10px;
    color: grey;
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
  width: max-content;
`;

class NYTestRedux extends Component {
  handleClickNews = async () => {
    let art = [];

    this.props.fetchArticles();
  };

  renderContent() {
    console.log('nytestredux props.articles', this.props.articles);

    if (this.props.articles == null) {
      return;
    }

    const sty = {};
    sty['margin'] = '4rem';
    sty['backgroundColor'] = 'rgba(240, 201, 193, 1)';
    sty['fontSize'] = '2rem';
    sty['display'] = 'inline';

    //this.props.articles.map(instance => console.log(instance.abstract));

    return this.props.articles.map(instance =>
      instance.map(({ abstract, pub_date, headline, web_url }) => {
        let abs2 = abstract
          .split(' ')
          .map(word =>
            word == 'Trump' || word == 'Trump’s' ? 'PRESIDENT TRUMP' : word
          )
          .join(' ');

        return (
          <div key={pub_date} style={{ display: 'inline-block' }}>
            <Contr>
              <Headline>
                <a href={web_url}>{headline.main.toUpperCase()}</a>
              </Headline>
              <Articlesec>{abs2}</Articlesec>
              <Authr>AUTHOR</Authr>
              <Dat>{(new Date(pub_date) + '').slice(0, 16)}</Dat>
              <SaveButton user={this.props.user} headline={headline.main} />
            </Contr>
          </div>
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
        <div style={{ margin: '0 auto' }}>{this.renderContent()}</div>
        <ScrollProgress />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth, articles: state.articles };
};

export default connect(
  mapStateToProps,
  actions
)(NYTestRedux);
