import React from 'react';
import { ReactComponent as CrownIcon } from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = () => (
  <header className="header">
    <a href="#" className="logo-container">
      <CrownIcon />
    </a>

    <div className="options">
      <nav>
        <a href="#" className="option">Shop</a>
        <a href="#" className="option">Sign in</a>
      </nav>

      <CartIcon />
    </div>
  </header>
);

export default Header;
