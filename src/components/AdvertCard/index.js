import React from 'react';
import {sprintf} from 'sprintf-js';
import CenterBox from '../CenterBox';
import {Link} from 'react-router-dom';
import { EmbeddedPost } from 'react-facebook';

import './AdvertCard.scss';

const AdvertCard = ({advertiserId, postId, interests}) => (
  <div className="advertcard__container clearfix">
    <div className="advertcard__advert">
      <EmbeddedPost
        href={sprintf('https://facebook.com/%s/posts/%s', advertiserId, postId)}
        width="300"/>
    </div>
    <div className="advertcard__info">
      <div className="advertcard__middle">
        {interests ?
          <span>
            <p>Target interests recorded:</p>
            <ul>
              {interests.map((interest, i) => <li key={'advert_' + postId + '_interest_' + i}>{interest}</li>)}
            </ul>
          </span>
          : <p>No targeted interests recorded for this advert.</p>
        }
      </div>
    </div>
  </div>
)

export default AdvertCard
