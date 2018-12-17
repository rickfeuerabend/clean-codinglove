// jshint ignore: start
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import cheerio from 'cheerio';

import TheCodingLove from './components/TheCodingLove';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchRandomEntry();
  }

  fetchRandomEntry() {
    fetch('https://cors-anywhere.herokuapp.com/https://thecodinglove.com/')
      .then(responseRandom => responseRandom.text())
      .then(res => {
        const $ = cheerio.load(res);
        const randomUrl = $('.nav-link').attr('href');
        fetch(`https://cors-anywhere.herokuapp.com/${randomUrl}`)
          .then(response => response.text())
          .then(result => {
            const $$ = cheerio.load(result);
            const blogpost = $$('.blog-post').first();

            const gif = blogpost
              .children('.blog-post-content')
              .find('img')
              .attr('src');
            const title = blogpost.children('.blog-post-title').text();

            this.setState({ gif, title });
          });
      });
  }

  render() {
    const { gif, title } = this.state;
    if (!gif) return null;
    return <TheCodingLove gif={gif} title={title} />;
  }
}

export default hot(module)(App);
