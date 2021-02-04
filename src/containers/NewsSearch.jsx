import React, { Component } from 'react';
import ArticlesList from '../components/articles/ArticlesList';
import getArticles from '../services/getArticles';
import Header from '../components/header/Header';

export default class NewsSearch extends Component {
    state = {
      loading: true,
      articles: [],
      search: "",
    };
  
    handleSearch = ({ target }) => {
      if (target.value) {
        return searchArticles(target.value).then(({ articles }) => {
          this.setState({ articles, search: target.value });
        });
      }
    };
  
    componentDidMount() {
      return getArticles().then(({ articles }) =>
        this.setState({ articles, loading: false })
      );
    }
  
    render() {
      const { articles, loading, search } = this.state;
      const { handleSearch } = this;
      return (
        <>
          <Header handleSearch={handleSearch} />
          {loading ? (
            <>Loading...</>
          ) : (
            <ArticlesList articles={articles} search={search} />
          )}
        </>
      );
    }
  }

  