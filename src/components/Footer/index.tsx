import React from 'react';
import coinGecko from '../../assets/coingecko.svg';
import './styles.scss';

const Footer = () => (
  <footer className="footer">
    <p className="footer__description">
      {'Coded & Designed by '}
      <a href="https://www.linkedin.com/in/pedro-clerici-a810a123b" target="_blank" rel="noreferrer">Pedro Clerici</a>
      <br />
      {'Icons by '}
      <a href="https://cryptoicons.co/" target="_blank" rel="noreferrer">CryptoIcons</a>
    </p>
    <div className="footer__powered-by">
      <p>Powered by</p>
      <a href="https://www.coingecko.com" target="_blank" rel="noreferrer">
        <img className="footer_coingecko-logo" src={coinGecko} alt="ok-hand" />
      </a>
    </div>
  </footer>
);

export default Footer;
