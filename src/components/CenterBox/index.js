import React from 'react';
import './CenterBox.scss';

const CenterBox = ({children}) => (
  <div className="centerbox__outer">
    <div className="centerbox__inner">
      {children}
    </div>
  </div>
)

export default CenterBox
