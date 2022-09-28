/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useContext } from 'react';
import cryptoInfoService from '../../../services/cryptoInfoService';
import { UserContext } from '../../../context/userContext';
import './styles.scss';

type CryptoCardProps = {
  cryptocurrencyId: string
  cryptocurrencyName: string
  cryptocurrencySymbol: string
  cryptocurrencyPrice: string
  cryptocurrencyChangePercentage: string
}

const CryptoCard = ({
  cryptocurrencyId,
  cryptocurrencyName,
  cryptocurrencySymbol,
  cryptocurrencyPrice,
  cryptocurrencyChangePercentage,
}: CryptoCardProps) => {
  const { vsCurrency, setCryptocurrency } = useContext(UserContext);
  return (
    <div
      aria-hidden="true"
      className="crypto-card"
      onClick={() => {
        cryptoInfoService.getCryptoInfo(cryptocurrencyId, vsCurrency.id)
          .then((data) => setCryptocurrency(data));
      }}
    >
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
          {`${vsCurrency.symbol} ${cryptocurrencyPrice}`}
        </p>
        <p
          className="crypto-card__change-percentage"
          style={+cryptocurrencyChangePercentage.replace('%', '') > 0 ? { color: 'var(--green-color)' } : { color: 'var(--red-color)' }}
        >
          {cryptocurrencyChangePercentage}
        </p>
      </div>
    </div>
  );
};

export default CryptoCard;
