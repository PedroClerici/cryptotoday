import { Price, MarketData, MarketChart } from '../types/cryptoInfoTypes';

const baseURL = 'https://api.coingecko.com/api/v3';

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const getPrice = async (cryptoId: string, vsCurrencyId: string): Promise<number> => {
  const data = await fetch(`${baseURL}/simple/price?ids=${cryptoId}&vs_currencies=${vsCurrencyId}`)
    .then((response) => response.json())
    .then((obj: Price) => obj[cryptoId][vsCurrencyId]);

  return data;
};

const getMarketData = async (
  cryptoId: string,
  vsCurrencyId: string,
): Promise<MarketData> => {
  const data = await fetch(`${baseURL}/coins/markets?vs_currency=${cryptoId}&ids=${vsCurrencyId}&sparkline=false`)
    .then((response) => response.json())
    .then((marketData) => marketData[0]);

  return data;
};

const getMarketChart = async (
  cryptoId: string,
  vsCurrencyId: string,
  days: number,
  interval: 'daily' | 'hourly' = 'hourly',
): Promise<MarketChart> => {
  const data = await fetch(`${baseURL}/coins/${cryptoId}/market_chart?vs_currency=${vsCurrencyId}&days=${days}&interval=${interval}`)
    .then((response) => response.json());

  return data;
};

// TODO: Refactor priceChangePercentage handling: 1h | 24h | 7d | 14d | 30d | 1y
const getPriceChangePercentage = async (
  cryptoId: string,
  vsCurrencyId: string,
  priceChangePercentage: number,
): Promise<number> => {
  const data = await fetch(`${baseURL}/coins/markets?vs_currency=${vsCurrencyId}&ids=${cryptoId}&sparkline=false&price_change_percentage=${priceChangePercentage}d`)
    .then((response) => response.json())
    .then((obj: any) => obj[0][`price_change_percentage_${priceChangePercentage}d_in_currency`]);

  return +formatter.format(data);
};

const cryptoInfoService = {
  getPrice,
  getMarketData,
  getMarketChart,
  getPriceChangePercentage,
};

export default cryptoInfoService;
