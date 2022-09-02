/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { Cryptocurrency } from '../../currencies/cryptocurrencies';

import SymbolTag from './SymbolTag';

import './CryptoHeading.scss';

interface Props {
  cryptocurrency: Cryptocurrency
}

const CryptoHeading: React.FC<Props> = (props) => (
  <div className="crypto-heading">
    <img
      className="crypto-heading__currency-icon"
      src={require(`/node_modules/cryptocurrency-icons/128/color/${props.cryptocurrency.symbol}.png`)}
      alt={`${props.cryptocurrency.id}-icon`}
    />
    <h1 className="crypto-heading__currency-name">
      {props.cryptocurrency.name}
    </h1>
    <SymbolTag cryptocurrency={props.cryptocurrency} />
  </div>
);

export default CryptoHeading;
