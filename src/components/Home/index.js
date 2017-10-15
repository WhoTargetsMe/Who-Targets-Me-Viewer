import React, {Component} from 'react';

import AdvertiserCard from '../AdvertiserCard';

import advertisers from '../../data/advertisers';

export default class Home extends Component {

  render() {
    return (
      <div className="home__container clearfix">
        {advertisers.map((advertiser, i) => <AdvertiserCard data={advertiser} key={'advertiser_' + i}/>)}
      </div>
    )
  }

}
