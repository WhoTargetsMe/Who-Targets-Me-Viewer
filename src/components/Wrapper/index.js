import React, { Component } from 'react';
import './Wrapper.scss';
import FacebookProvider from 'react-facebook';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from '../Home';
import Advertiser from '../Advertiser';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="wtmv">
        <div className="main">
          <FacebookProvider appId="1969644276620014">
            <RouterLogic />
          </FacebookProvider>
        </div>
      </div>
    );
  }
}

const RouterLogic = () => (
  <Router>
    <span>
      <Route exact path="/:lang/viewer" component={Home}/>
      <Route exact path="/:lang/viewer/:advertiserSlug/:advertiserId" component={Advertiser}/>
    </span>
  </Router>
)
