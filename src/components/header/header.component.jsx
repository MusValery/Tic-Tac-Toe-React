import React from 'react';
import CrownIcon from '../../assets/crown.svg';
import ShopBag from '../../assets/shopping-bag.svg';
import './header.styles.scss';
import {Link} from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/" className="logo-container">
      <img src={CrownIcon} alt="Logo"/>
    </Link>

    <div className="options">
        <Link to="/shop" className="option">Shop</Link>
        <Link to="/sign-in" className="option">Sign in</Link>
        <Link to="cart" className="cart-icon"></Link>
    <div className="cart">
          <img className='shopping-icon' src={ShopBag} alt="Bag" />
          <span className='item-count'>0</span>
      </div>
    </div>
  </header>
);

export default Header;
