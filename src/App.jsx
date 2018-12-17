import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import * as qs from 'query-string';

import TheCodingLove from './components/TheCodingLove';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // eslint-disable-next-line
    const queryParams = qs.parse(location.search);
    return <TheCodingLove gif={queryParams.gif} title={queryParams.title} />;
  }
}

export default hot(module)(App);
