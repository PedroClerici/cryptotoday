import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.svg';
import SearchBar from './SearchBar';
import cryptocurrenciesList from '../../currencies/cryptocurrencies';

const Header = () => (
  <header className="header">
    <img className="header__logo" src={logo} alt="ok-hand" />
    <SearchBar placeholder="Search cryptocurrencies" data={cryptocurrenciesList} />
  </header>
);

export default Header;
