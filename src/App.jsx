// jshint ignore: start
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import cheerio from 'cheerio';

import TheCodingLove from './components/TheCodingLove';

import stlyes from './app.css';

import load1 from './assets/load1.gif';
import load3 from './assets/load3.gif';

const loadings = [load1, load3];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchRandomEntry();
  }

  fetchRandomEntry() {
    fetch('https://cors-anywhere.herokuapp.com/https://thecodinglove.com/', {
      headers: {
        Origin: 'https://thecodinglove.com',
      },
    })
      .then(responseRandom => responseRandom.text())
      .then(res => {
        const $ = cheerio.load(res);
        const randomUrl = $('.nav-link').attr('href');

        fetch(`https://cors-anywhere.herokuapp.com/${randomUrl}`, {
          headers: {
            Origin: 'https://thecodinglove.com',
          },
        })
          .then(response => response.text())
          .then(result => {
            const $$ = cheerio.load(result);
            const blogpost = $$('.blog-post').first();

            let gif = blogpost
              .children('.blog-post-content')
              .find('img')
              .attr('src');

            if (!gif) {
              gif = blogpost
                .children('.blog-post-content')
                .find('object')
                .attr('data');
            }

            const title = blogpost.children('.blog-post-title').text();
            this.setState({ gif, title });
          })
          .catch(error => {
            throw error;
          });
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    const { gif, title } = this.state;
    if (!gif)
      return (
        <img
          className={stlyes.loader}
          alt="Clean coding love"
          src={loadings[Math.floor(Math.random() * 2)]}
        />
      );
    return <TheCodingLove gif={gif} title={title} />;
  }
}

export default hot(module)(App);
