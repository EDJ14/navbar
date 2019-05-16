import React, { Component } from 'react';
import axios from 'axios';
import ScrollProgress from './ScrollProgress';

class NYTest extends Component {
  state = { articles: [] };

  handleClickNews = async () => {
    let art = this.state.articles;

    const keyurl =
      'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=iOY5EuklpHJcrAeNGlvPKAt0yf8EktdN';

    const res = await axios.get(keyurl);
    // res.data.response.docs.map(doc => console.log(doc.abstract));

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
      instance.map(({ abstract }) => {
        let abs2 = abstract
          .split(' ')
          .map(word =>
            word == 'Trump' || word == 'Trump’s' ? 'PRESIDENT TRUMP' : word
          )
          .join(' ');

        return (
          <div key={abstract} style={sty}>
            {abs2}
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
        <div>{this.renderContent()}</div>
        <ScrollProgress />
      </div>
    );
  }
}

export default NYTest;
