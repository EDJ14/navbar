import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';

import ScrollProgress from './ScrollProgress';
import SaveButton from './SaveButton';
import LikedArticles from './LikedArticles';

import { IconContext } from 'react-icons';
import { MdHourglassEmpty } from 'react-icons/md';
import Spinner from './Spinner';

const Contr = styled.div`
  background-image: linear-gradient(to bottom right, white, rgb(225, 230, 239));
  margin: 1.5rem 2.5rem;
  box-shadow: 0 0 10px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
  grid-template-rows: min-content min-content min-content 2.4rem;
  grid-gap: 10px;
  grid-template-areas:
    'head head head head'
    'main main main main'
    'auth auth date .   '
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
  margin: 0 2rem 1rem 2rem;
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
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
`;
const Dat = styled.div`
  grid-area: date;
  display: flex;
  align-items: center;
  width: max-content;
  margin-bottom: 1.5rem;
`;

class NYTestRedux extends Component {
  state = { loading_articles: false };

  handleClickNews = async () => {
    this.setState({ loading_articles: true });
    await this.props.fetchArticles();
    this.setState({ loading_articles: false });
  };

  renderContent() {
    if (this.state.loading_articles) {
      return (
        <div
          style={{
            height: '75vh',
            width: '100vw',
            backgroundColor: 'gray',
            opacity: '.7',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Spinner />
        </div>
      );
    }

    /* <IconContext.Provider value={{ size: '50rem' }}>
          <div
            style={{
              height: '100vh',
              width: '100vw',
              backgroundColor: 'gray',
              opacity: '.7',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <MdHourglassEmpty />
          </div>
        </IconContext.Provider> */

    if (this.props.articles == null) {
      return;
    }

    const sty = {};
    sty['margin'] = '4rem';
    sty['backgroundColor'] = 'rgba(240, 201, 193, 1)';
    sty['fontSize'] = '2rem';
    sty['display'] = 'inline';

    return this.props.articles.map(instance =>
      instance.map(({ abstract, pub_date, headline, web_url, byline }) => {
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
              <Authr>{byline.original.slice(3, byline.original.length)}</Authr>
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
    const outstyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      justifyItems: 'center'
    };
    const inputStyle = { margin: '4rem' };
    return (
      <div style={{ margin: '0 auto' }}>
        <div>
          <button style={style} onClick={this.handleClickNews}>
            PRESS FOR NOOS
          </button>
          <LikedArticles />
        </div>
        <div style={outstyle}>{this.renderContent()}</div>
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
