import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: 'fetch_user', payload: res.data });
};

export const fetchArticles = () => async dispatch => {
  const keyurl =
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=iOY5EuklpHJcrAeNGlvPKAt0yf8EktdN';

  const res = await axios.get(keyurl);

  dispatch({ type: 'fetch_articles', payload: res.data.response.docs });
};

/*export const likeArticle = () => async (dispatch, article) => {
  const res = await axios.post('/api/id');

  dispatch({ type: 'like_article' });
};*/
