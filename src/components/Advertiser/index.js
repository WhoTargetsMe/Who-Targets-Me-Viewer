import React, {Component} from 'react';
import {getAdvertsByAdvertiserId} from '../../data/adverts.js';
import './Advertiser.scss';
import {Link} from 'react-router-dom';

import AdvertCard from '../AdvertCard';

import {getAdvertiserById} from '../../data/advertisers.js'

export default class Advertiser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      adverts: null
    }
  }

  componentWillMount() {
    console.log(getAdvertiserById(advertiserId))
    const {advertiserId} = this.props.match.params;
    this.setState({
      adverts: getAdvertsByAdvertiserId(advertiserId),
      advertiser: getAdvertiserById(advertiserId)
    });
  }

  render() {
    const {adverts, advertiser: {advertiserName}} = this.state;
    return (
      <div className="advertiser__container">
        <div className="advertiser__advertiser">
          <h2>{advertiserName}</h2>
          <p>Displaying all reported adverts</p>
          <p><Link to="/en/viewer">Back</Link></p>
        </div>
        <span>
          {adverts.map((advert, i) => <AdvertCard key={"advert_" + i} {...advert} />)}
        </span>
      </div>
    )
  }
}
