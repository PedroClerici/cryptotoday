/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';
import './styles.scss';

type CryptoCardProps = {
  cryptocurrencyName: string
  cryptocurrencySymbol: string
  cryptocurrencyPrice: number
  cryptocurrencyChangePercentage: number
}

const CryptoCard = ({
  cryptocurrencyName,
  cryptocurrencySymbol,
  cryptocurrencyPrice,
  cryptocurrencyChangePercentage,
}: CryptoCardProps) => {
  const { vsCurrency } = useContext(UserContext);

  return (
    <div className="crypto-card">
      <img
        className="crypto-card__icon"
        src={require(`/node_modules/cryptocurrency-icons/128/color/${cryptocurrencySymbol}.png`)}
        alt={`${cryptocurrencyName.toLowerCase()}-icon`}
      />
      <div className="crypto-card__info">
        <p className="crypto-card__name">{cryptocurrencyName}</p>
        <p className="crypto-card__symbol">{cryptocurrencySymbol.toUpperCase()}</p>
      </div>
      <div className="crypto-card__price">
        <p className="crypto-card__name">
          {`${vsCurrency.symbol} ${cryptocurrencyPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
        </p>
        <p
          className="crypto-card__change-percentage"
          style={cryptocurrencyChangePercentage > 0 ? { color: 'var(--green-color)' } : { color: 'var(--red-color)' }}
        >
          {`${cryptocurrencyChangePercentage}%`}
        </p>
      </div>
    </div>
  );
};

export default CryptoCard;
