import React, { useEffect, useState } from 'react';
/* eslint-disable no-unused-vars */
import type { MarketChart, MarketData, CryptoInfo } from '../types/cryptoInfoServiceTypes';
import { Cryptocurrency, cryptocurrenciesList } from '../currencies/cryptocurrencies';
import { VsCurrency, vsCurrenciesList } from '../currencies/vsCurrencies';
import cryptoInfoService from '../services/cryptoInfoService';

type UserContextType = {
  cryptocurrency: Cryptocurrency
  setCryptocurrency: (newState: Cryptocurrency) => void
  cryptocurrencyPrice: string,
  setCryptocurrencyPrice: (newState: string) => void
  cryptocurrencyChangePercentage: string,
  setCryptocurrencyChangePercentage: (newState: string) => void
  cryptocurrencyInfo: CryptoInfo
  setCryptocurrencyInfo: (newState: CryptoInfo) => void
  prevDays: number
  setPrevDays: (newState: number) => void
  vsCurrency: VsCurrency
  setVsCurrency: (newState: VsCurrency) => void
  popularCryptosData: MarketData
  setPopularCryptosData: (newState: MarketData) => void
  marketChartData: MarketChart
  setMarketChartData: (newState: MarketChart) => void
}

type UserContextProps = {
  children: React.ReactNode;
}

const defaultValue = {
  cryptocurrency: cryptocurrenciesList.find((cryptocurrency) => cryptocurrency.id === 'bitcoin')!,
  setCryptocurrency: () => {},
  cryptocurrencyPrice: '',
  setCryptocurrencyPrice: () => {},
  cryptocurrencyChangePercentage: '',
  setCryptocurrencyChangePercentage: () => {},
  cryptocurrencyInfo: {
    total_volume: '',
    high_24h: '',
    low_24h: '',
    circulating_supply: '',
    market_cap: '',
  },
  setCryptocurrencyInfo: () => {},
  prevDays: 1,
  setPrevDays: () => {},
  vsCurrency: vsCurrenciesList.find((vsCurrency) => vsCurrency.id === 'usd')!,
  setVsCurrency: () => {},
  popularCryptosData: [],
  setPopularCryptosData: () => {},
  marketChartData: [{ time: new Date(), price: 0 }],
  setMarketChartData: () => {},
};

export const UserContext = React.createContext<UserContextType>(defaultValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [cryptocurrency, setCryptocurrency] = useState<Cryptocurrency>(defaultValue.cryptocurrency);
  const [cryptocurrencyPrice, setCryptocurrencyPrice] = useState<string>(defaultValue.cryptocurrencyPrice);
  const [cryptocurrencyChangePercentage, setCryptocurrencyChangePercentage] = useState<string>(defaultValue.cryptocurrencyChangePercentage);
  const [cryptocurrencyInfo, setCryptocurrencyInfo] = useState<CryptoInfo>(defaultValue.cryptocurrencyInfo);
  const [prevDays, setPrevDays] = useState<number>(defaultValue.prevDays);
  const [vsCurrency, setVsCurrency] = useState<VsCurrency>(defaultValue.vsCurrency);
  const [
    popularCryptosData,
    setPopularCryptosData,
  ] = useState<MarketData>(defaultValue.popularCryptosData);
  const [marketChartData, setMarketChartData] = useState<MarketChart>(defaultValue.marketChartData);

  useEffect(() => {
    cryptoInfoService.getPrice(cryptocurrency.id, vsCurrency.id)
      .then((price) => setCryptocurrencyPrice(price));

    cryptoInfoService.getPriceChangePercentage(
      cryptocurrency.id,
      vsCurrency.id,
    ).then((price) => setCryptocurrencyChangePercentage(price));

    cryptoInfoService.getCryptoInfo(cryptocurrency.id, vsCurrency.id)
      .then((info) => setCryptocurrencyInfo(info));

    const popularCryptosIds: string[] = [];
    for (const crypto of cryptocurrenciesList.slice(0, 6)) {
      popularCryptosIds.push(crypto.id);
    }

    cryptoInfoService.getMarketData(popularCryptosIds, vsCurrency.id)
      .then((data) => setPopularCryptosData(data));

    cryptoInfoService.getMarketChart(cryptocurrency.id, vsCurrency.id, prevDays)
      .then((data) => setMarketChartData(data));
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
        cryptocurrencyInfo,
        setCryptocurrencyInfo,
        prevDays,
        setPrevDays,
        vsCurrency,
        setVsCurrency,
        popularCryptosData,
        setPopularCryptosData,
        marketChartData,
        setMarketChartData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
