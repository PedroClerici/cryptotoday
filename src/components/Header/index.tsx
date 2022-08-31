import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';

const Header: React.FC<{}> = () => (
  <header className="header">
    <img className="header__logo" src={logo} alt="ok-hand" />
  </header>
);

export default Header;
