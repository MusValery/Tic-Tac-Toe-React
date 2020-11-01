import React from 'react';
import './menu-item.styles.scss';
import {Link} from 'react-router-dom';

const MenuItem = ({ title, imageUrl, linkUrl, size }) => {
  const img = {
    backgroundImage: `url(${imageUrl})`
  }
  const classItemSize = size ? 'menu-item ' + size : 'menu-item';
  const link = `/shop/${linkUrl}`
  return (
      <Link
          to={link}
          className={classItemSize}
      >
          <div
              className="background-image"
              style={img}>
          </div>
          <div className="content">
             <span className="title">{title}</span>
            <span className="subtitle">Shop now</span>
         </div>
      </Link>
  )
};

export default MenuItem;
