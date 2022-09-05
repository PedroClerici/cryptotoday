/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Cryptocurrency } from '../../../currencies/cryptocurrencies';
import { VsCurrency } from '../../../currencies/vsCurrency';

import './Converter.scss';

interface Props {
  cryptocurrency: Cryptocurrency
  vsCurrency: VsCurrency
}

const Converter: React.FC<Props> = (props) => (
  <>
    <div className="converter">
      Amount
      <div className="converter__input-container">
        <input
          type="text"
          className="converter__input"
          placeholder="0.00"
        />
        <div className="converter__cryptocurrency-tag">
          <img
            className="converter__cryptocurrency-icon"
            src={require(`/node_modules/cryptocurrency-icons/128/color/${props.cryptocurrency.symbol}.png`)}
            alt={`${props.cryptocurrency.id}-icon`}
          />
          {props.cryptocurrency.symbol.toUpperCase()}
        </div>
      </div>
    </div>
    <div className="total">
      Total
      <span>{`${props.vsCurrency.id.toUpperCase()} ${props.vsCurrency.symbol}0.00`}</span>
    </div>
  </>
);

export default Converter;
