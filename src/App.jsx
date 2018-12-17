// jshint ignore: start
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import * as qs from 'query-string';

import TheCodingLove from './components/TheCodingLove';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // getRandomUrl() {
  // console.log('Load thecodinglove.com');

  // fetch(
  //   'https://cors-anywhere.herokuapp.com/https://thecodinglove.com/',
  // ).then(response => console.log(response));
  // }

  render() {
    // this.getRandomUrl();

    // eslint-disable-next-line
    const queryParams = qs.parse(location.search);
    return <TheCodingLove gif={queryParams.gif} title={queryParams.title} />;
  }
}

export default hot(module)(App);
