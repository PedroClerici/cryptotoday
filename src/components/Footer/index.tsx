import React from 'react';

import './styles.scss';

interface Props {
}

const Footer: React.FC<Props> = () => (
  <footer className="footer">
    <p className="footer__description">
      {'Coded & Designed by '}
      <a href="https://www.linkedin.com/in/pedro-clerici-a810a123b" target="_blank" rel="noreferrer">Pedro Clerici</a>
      <br />
      {'Icons by '}
      <a href="https://cryptoicons.co/" target="_blank" rel="noreferrer">CryptoIcons</a>
    </p>
  </footer>
);

export default Footer;
