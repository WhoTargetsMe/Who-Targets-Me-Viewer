import React from 'react';
import {sprintf} from 'sprintf-js';
import CenterBox from '../CenterBox';
import {Link} from 'react-router-dom';

import './AdvertiserCard.scss';

const AdvertiserCard = ({data: {advertiserName, advertiserId}}) => (
  <Link to={sprintf('/en/viewer/%s/%s', slugify(advertiserName), advertiserId)}>
    <div className="advertisercard__container">
      <CenterBox>
        <img src={sprintf('http://graph.facebook.com/%s/picture?type=square', advertiserId)} />
        <p>{advertiserName}</p>
      </CenterBox>
    </div>
  </Link>
)

const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export default AdvertiserCard
