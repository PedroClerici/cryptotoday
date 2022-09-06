import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.svg';

const Header = () => (
  <header className="header">
    <img className="header__logo" src={logo} alt="ok-hand" />
  </header>
);

export default Header;
