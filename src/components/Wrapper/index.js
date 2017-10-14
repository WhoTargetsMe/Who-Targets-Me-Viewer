import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from 'components/Home';

export default class Wrapper extends Component {
  render() {
    return (
      <p></p>
    );
  }
}

const routes = () => (
  <Router>
    <Route exact path="/" component={Home}/>
  </Router>
)
