/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Cryptocurrency, cryptocurrenciesList } from '../currencies/cryptocurrencies';
import { VsCurrency, vsCurrenciesList } from '../currencies/vsCurrencies';
import cryptoInfoService from '../services/cryptoInfoService';

type UserContextType = {
  cryptocurrency: Cryptocurrency
  setCryptocurrency: (newState: Cryptocurrency) => void
  cryptocurrencyPrice: number,
  setCryptocurrencyPrice: (newState: number) => void
  cryptocurrencyChangePercentage: number,
  setCryptocurrencyChangePercentage: (newState: number) => void
  prevDays: number
  setPrevDays: (newState: number) => void
  vsCurrency: VsCurrency
  setVsCurrency: (newState: VsCurrency) => void
}

type UserContextProps = {
  children: React.ReactNode;
}

const defaultValue = {
  cryptocurrency: cryptocurrenciesList.find((cryptocurrency) => cryptocurrency.id === 'monero')!,
  setCryptocurrency: () => {},
  cryptocurrencyPrice: 0,
  setCryptocurrencyPrice: () => {},
  cryptocurrencyChangePercentage: 0,
  setCryptocurrencyChangePercentage: () => {},
  prevDays: 7,
  setPrevDays: () => {},
  vsCurrency: vsCurrenciesList.find((vsCurrency) => vsCurrency.id === 'usd')!,
  setVsCurrency: () => {},
};

export const UserContext = React.createContext<UserContextType>(defaultValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [cryptocurrency, setCryptocurrency] = useState<Cryptocurrency>(defaultValue.cryptocurrency);
  const [cryptocurrencyPrice, setCryptocurrencyPrice] = useState<number>(0);
  const [cryptocurrencyChangePercentage, setCryptocurrencyChangePercentage] = useState<number>(0);
  const [prevDays, setPrevDays] = useState<number>(defaultValue.prevDays);
  const [vsCurrency, setVsCurrency] = useState<VsCurrency>(defaultValue.vsCurrency);

  useEffect(() => {
    cryptoInfoService.getPrice(cryptocurrency.id, vsCurrency.id)
      .then((price) => setCryptocurrencyPrice(price));

    cryptoInfoService.getPriceChangePercentage(
      cryptocurrency.id,
      vsCurrency.id,
      prevDays,
    ).then((price) => setCryptocurrencyChangePercentage(price));
  }, [cryptocurrency, vsCurrency, prevDays]);

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cryptocurrency,
        setCryptocurrency,
        cryptocurrencyPrice,
        setCryptocurrencyPrice,
        cryptocurrencyChangePercentage,
        setCryptocurrencyChangePercentage,
        prevDays,
        setPrevDays,
        vsCurrency,
        setVsCurrency,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
