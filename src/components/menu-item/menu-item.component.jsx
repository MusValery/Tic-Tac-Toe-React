import React from 'react';
import './menu-item.styles.scss';
import { useHistory } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, linkUrl, size }) => {
  const history = useHistory();

  return (
    <div
      role='button'
      tabIndex='0'
      onClick={() => history.push(`/shop/${linkUrl}`)}
      className={`menu-item ${size || ''}`}>
          <div
              className="background-image"
              style={{ backgroundImage: `url(${imageUrl})`}}>
          </div>
          <div className="content">
             <span className="title">{title.toUpperCase()}</span>
            <span className="subtitle">Shop now</span>
         </div>
         </div>
  )
};

export default MenuItem;
