import React, { Component } from 'react';
import styled from 'styled-components';

const Bkgrnd = styled.div`
  background-color: rgba(240, 201, 193, 1);
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    'article article article article'
    'article article article article'
    'author author date date';
`;

const artCont = styled.div`
  grid-template: "article article article article
`;

class NYTSearch extends Component {
  state = { term: '', articles: [] };

  handleSubmit = async e => {
    e.preventDefault();

    const keyurl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
      this.state.term
    }&api-key=iOY5EuklpHJcrAeNGlvPKAt0yf8EktdN`;

    const res = await axios.get(keyurl);
    console.log(res);

    this.setState({ articles: res.data.response });
  };

  renderContent() {
    if (this.state.articles.length == 0) {
      return;
    }

    const sty = {};
    sty['margin'] = '4rem';
    sty['backgroundImage'] =
      'linear-gradient(to right, rgba(153, 161, 235, 1), rgba(240, 201, 193, 1))';
    sty['fontSize'] = '2rem';
    //sty['display'] = 'inline';

    return this.state.articles.docs.map(({ abstract, web_url }) => {
      return (
        <div key={abstract} style={sty}>
          <a href={web_url}>{abstract}</a>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">ENTER SEARCH</label>
          <input
            onSubmit={this.handleSubmit}
            id="search"
            type="text"
            onChange={e => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
        </form>
        {this.renderContent()}
      </div>
    );
  }
}

export default NYTSearch;
